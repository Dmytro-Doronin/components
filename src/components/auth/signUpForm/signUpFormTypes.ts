import { z } from 'zod';

import {signUpSchema} from './signUpForm.validation.ts';

export type FormValues = z.infer<typeof signUpSchema>;
