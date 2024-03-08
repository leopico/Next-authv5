"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";

export const Social = () => {
    return (
        <div className="w-full flex items-center gap-x-2">
            <Button
                onClick={() => { }}
                className="w-full" variant="outline" size="lg">
                <FcGoogle />
            </Button>
            <Button
                onClick={() => { }}
                className="w-full" variant="outline" size="lg">
                <FaGithub />
            </Button>
        </div>
    )
}