# Build
FROM node:18-alpine AS builder

WORKDIR /app
COPY ./web/package.json ./web/package-lock.json* ./

ARG NEXT_PUBLIC_BACKEND_URL
ARG NEXT_PUBLIC_BACKEND_PORT

RUN \
  if [ -f package-lock.json ]; then npm ci; \
  else npm install; \
  fi

COPY ./web ./

ENV NEXT_PUBLIC_BACKEND_URL=$NEXT_PUBLIC_BACKEND_URL
ENV NEXT_PUBLIC_BACKEND_PORT=$NEXT_PUBLIC_BACKEND_PORT

RUN npm run build

# Runner
FROM node:18-alpine AS runner

WORKDIR /app

COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["npm", "run", "start"]
