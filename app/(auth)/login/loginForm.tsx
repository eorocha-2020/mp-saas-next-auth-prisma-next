'use client'

import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import Form from "next/form";
import loginAction from "@/app/(auth)/login/loginAction";
import {useActionState} from "react";

export default function LoginForm() {

    const [state, formAction, isPending] = useActionState(loginAction, null)
    console.log(state);

    return (
        <>
            {
                state?.success === false && <p className={"text-red-500"}>
                {state.message}
            </p>
            }
            <Form action={formAction}>
                <div>
                    <Label>Email</Label>
                    <Input type="email" name="email" placeholder="eu@exemplo.com"/>
                </div>
                <div>
                    <Label>Senha</Label>
                    <Input type="password" name="password" placeholder="********"/>
                </div>
                <div>
                    <Button className="w-full mt-6" type="submit">
                        Login
                    </Button>
                </div>
            </Form>
        </>
    )
}