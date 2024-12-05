import {Checkbox, Link, User, Chip, cn} from "@nextui-org/react";

type user = {
  name: string,
  avatar: string,
  role: string,
  status?: string,
}

type status = "default" | "primary" | "secondary" | "success" | "warning" | "danger" | undefined

export const CustomCheckbox = ({ user, statusColor, value }: { user:user, statusColor?:status, value:string }) => {
  return (
    <Checkbox
      aria-label={user.name}
      classNames={{
        base: cn(
          "inline-flex max-w-3xl w-full bg-content1 m-0",
          "hover:bg-content2 items-center justify-start",
          "cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
          "data-[selected=true]:border-primary"
        ),
        label: "w-full",
      }}
      value={value}
    >
      <div className="w-full flex justify-between gap-2">
        <User
          avatarProps={{ size: "md", src: user.avatar }}
          name={user.name}
          classNames={{base: "w-2/6 justify-start"}}
        />
        <div className="flex flex-col items-end justify-center gap-1">
          <div className="text-tiny text-default-500 max-w-[30vw]">{user.role}</div>
          {statusColor && user.status && <Chip color={statusColor} size="sm" variant="flat">
            {user.status}
          </Chip>}
        </div>
      </div>
    </Checkbox>
  );
};