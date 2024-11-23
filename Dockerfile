# Use the Python 3 alpine official image
# https://hub.docker.com/_/python
FROM python:3-alpine

# Create and change to the app directory.
WORKDIR /app

# Copy local code to the container image.
COPY . .

# Install project dependencies
RUN pip install --upgrade build setuptools
RUN pip install --no-cache-dir ./pkg
RUN pip install --no-cache-dir ./api

# Run the web service on container startup.
CMD ["hypercorn", "./api/dilemma_api/app:app", "--bind", "::"]