'use client'

import Form from "next/form";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import registerAction from "@/app/(auth)/cadastro/registerAction";
import { useActionState } from "react";


export default function RegisterForm() {

    const [state, formAction, isPending] = useActionState(registerAction, null)

    return (
        <>
            {state?.success === false && (
                <div className="text-red-500 text-sm mb-3">
                    {state?.message}
                </div>
            )}
            <Form action={ formAction }>
                <div>
                    <Label>Nome</Label>
                    <Input type="text" name="name" placeholder="Fulano de Tal" />
                </div>
                <div>
                    <Label>Email</Label>
                    <Input type="email" name="email" placeholder="eu@exemplo.com" />
                </div>
                <div>
                    <Label>Senha</Label>
                    <Input type="password" name="password" placeholder="********" />
                </div>
                <div>
                    <Button disabled={isPending} className="w-full mt-6" type="submit">
                        Registrar
                    </Button>
                </div>
            </Form>
        </>
)
}
