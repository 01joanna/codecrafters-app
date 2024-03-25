import Button from "../../components/Button/Button";

export default function Page() {
    return (
            <main className="flex flex-col gap-3 items-center p-20">
                <div id="logo" className="items-baseline">
                    <h1 className="">./m</h1>
                </div>
                <div id="signup-form" className="shadow-xl">
                    <form action="/signup" method="post" className="flex flex-col items-center px-8">
                        <legend className="font-light md:text-xl lg:text-4xl my-8">Create a new account</legend>

                        <div id="form-images-button" className="flex flex-col items-center">
                            <div id="form-fillables" className="flex lg:flex-row md:flex-col gap-8 mb-7">
                            <div id="signup-part-1">
                                <div>
                                    <label id="signup-label" for="name">NAME:</label><br/>
                                    <input type="text" id="name" name="name" placeholder="Your name" />
                                </div>
                                <div>
                                    <label id="signup-label" for="email">EMAIL:</label><br/>
                                    <input type="email" id="email" name="email" placeholder="Your email" />
                                </div>
                            </div>

                            <div id="signup-part-2">
                                <div>
                                    <label id="signup-label" for="password">PASSWORD:</label><br/>
                                    <input type="password" id="password" name="password" placeholder="Your password" />
                                </div>

                                <div>
                                    <label id="signup-label" for="password_confirmation">PASSWORD CONFIRMATION</label><br/>
                                    <input type="password" id="password_confirmation" name="password" placeholder="Your password again" />
                                </div>
                            </div>
                            </div>
                                    <label id="signup-label" for="image" className="-mb-4">IMAGE</label><br/>
                                    <input type="file" id="image" name="image" placeholder="Upload" />
                        <div id="submit-login" className="flex flex-col gap-2 my-10">
                            <Button type="submit" text="Sign up" classname="px-20"/>
                            <p className="text-xs font-light">Already a member? <a href="/login" className="text-blue">Log in</a></p>
                        </div>
                        </div>
                    </form>
                </div>
            </main>
    )
}