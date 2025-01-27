'use server'

import {signIn} from "@/auth";
import {redirect} from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect";

export default async function loginAction(_prevState: any, formData: FormData) {

    try {
        await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: true,
            redirectTo: ('/dashboard')
        });
        return { success: true }

    } catch (e) {
        if (e.type === 'CredentialsSignin') {
            return {success: false, message: 'Email ou senha inválidos.'}
        }
        if (isRedirectError(e)) {
            throw e;
        }
        console.log('error out', e)
        return {success: false, message: 'Erro desconhecido.'}
    }
}