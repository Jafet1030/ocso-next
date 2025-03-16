import { Button, Input, } from "@nextui-org/react"
import Link from "next/link"

export default function SignupPage() {
    return (
        <div className="bg-orange-500 px-10 py-2 rounded-md">
            <p className="text-2xl my-4 text-white">Sign up on the platform</p>
            <div className="flex flex-col gap-2 my-4 items-center">
                <Input label="Email" type="email" isRequired={true} size="sm" />
                <Input label="Password" type="password" isRequired={true} size="sm" />
                <Input label="Repeat Password" type="password" isRequired={true} size="sm"/>
            </div>
            <div className="flex flex-col items-center gap 2">
                <Button color="primary">Sign Up</Button>
                <p>
                    Already have an account? <Link href="/login" className="text-red-600 underline">Login</Link>
                </p>
            </div>
        </div>
    )
}