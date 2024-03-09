import { auth, signOut } from "@/auth"


const SettingsPage = async () => {
    const session = await auth();

    return (
        <div className="flex flex-col justify-center items-center h-96 space-y-10">
            <div>{JSON.stringify(session)}</div>
            <form action={async () => {
                "use server"
                await signOut();
            }}>
                <button type="submit" className="px-2 py-1 bg-red-300 rounded-md text-white">
                    Sign out
                </button>
            </form>
        </div>
    )
}

export default SettingsPage