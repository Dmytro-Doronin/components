import { z } from 'zod';

export const loginSchema = z.object({
    email: z.string().trim().pipe(z.email({ message: "Invalid email" })),
    password: z.string().min(3, { message: 'Password must be at least 3 characters' }),
});
