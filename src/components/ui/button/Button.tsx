import type {ComponentPropsWithoutRef, ElementType, ReactNode} from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
const buttonStyles = cva(
    [
        "font-inherit text-inherit",
        "inline-flex items-center justify-center gap-1",
        "min-h-10 min-w-10 px-[55px] py-3.5",
        "rounded-full text-sm font-medium text-center",
        "border-0 cursor-pointer select-none outline outline-none focus-visible:ring-1 focus-visible:ring-offset-1",
        "transition ease-in-out duration-300",
    ].join(" "),
    {
        variants: {
            variant: {
                primary: "bg-purple-700 text-white hover:bg-purple-700",
                secondary: "bg-dark-900 text-white border-2 border-blue-500 hover:bg-dark-700 px-[55px]",
                success: "bg-success-500 text-white hover:brightness-95",
                info: "bg-blue-500 text-white hover:brightness-95",
                tertiary: "bg-dark-700 border border-dark-500 text-white hover:brightness-95",
            },
            fullWidth: {
                true: "w-full",
                false: "",
            },
        },
        defaultVariants: {
            variant: "primary",
            fullWidth: false,
        },
    }
);


export type ButtonProps<T extends ElementType = 'button'> = {
    as?: T;
    children: ReactNode;
    variant?:
        | 'primary'
        | 'secondary'
        | 'success'
        | 'info'
        | 'tertiary'
    fullWidth?: boolean;
    className?: string;
} & VariantProps<typeof buttonStyles> &
    ComponentPropsWithoutRef<T>;

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
    const { variant = 'primary', fullWidth, className, as: Component = 'button', ...rest } = props;

    return (
        <Component
            className={twMerge(buttonStyles({ variant, fullWidth }), className)}
            {...rest}
        ></Component>
    );
};

