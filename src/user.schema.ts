import {z} from 'zod';

export const userSchema = z.object({
    name: z.string().optional(),
    email: z.email().optional(),
    age:z.number().optional(),
    gender:z.string().optional(),
    users:z.array(z.object({
        education:z.string().optional(),
        certification:z.string().optional()
    }))
})


export type UserFormSchema = z.infer<typeof userSchema>