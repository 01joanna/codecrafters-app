export default function Page() {
    return (
        <main className="flex flex-col items-center gap-8 pt-8 pb-16">
            <h2 className="text-[50px] font-light">Add a new event</h2>
            <form action="/create" method="post" className="border border-yellow px-12 py-8 items-center rounded-xl flex flex-col justify-center gap-20">
                <fieldset>
                    <div className="mb-5">
                        <label id="event-form-label" for="title">Title:</label><br/>
                        <input type="text" id="title" name="title" placeholder="Event title" className="w-full" />
                    </div>
                    <hr/>
                    <br/>
                    <div id="event-form-fillables" className="flex gap-12">
                        <div id="event-form-part1" className="flex flex-col gap-5">
                            <div id="event-form-date">
                                <label id="event-form-label" for="date">Date:</label><br/>
                                <input type="date" id="date" name="date" />
                            </div>
                            <div id="event-form-time">
                                <label id="event-form-label" for="time">Time:</label><br/>
                                <input type="time" id="time" name="time" />
                            </div>
                            <div id="event-form-location">
                                <label id="event-form-label" for="location">Location:</label><br/>
                                <input type="text" id="location" name="location" placeholder="Event location" />
                            </div>
                            <div id="event-form-assistants">
                                <label id="event-form-label" for="assistants">Max. Assistants:</label><br/>
                                <input type="number" id="assistants" name="assistants" placeholder="Number of max. assistants" />
                            </div>
                        </div>
                        <div id="event-form-part2" className="flex flex-col gap-3">
                            <div id="event-form-description">
                                <label id="event-form-label" for="description">Description:</label><br/>
                                <textarea id="description" name="description" placeholder="Event description" />
                            </div>
                            <div id="event-form-category" className="text-xs">
                                <fieldset>
                                    <legend>Select a category</legend>
                                    <div>
                                        <input type="radio" id="online" name="category" value="music" />
                                        <label for="online">Online</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="in-person" name="category" value="sports" />
                                        <label for="in-person">In-person</label>
                                    </div>
                                </fieldset>
                            </div>
                            <div id="event-form-image">
                                <label id="event-form-label" for="image">Image:</label><br/>
                                <input type="file" id="image" name="image" placeholder="Event image" />
                            </div>
                        </div>
                    </div>
                </fieldset>
            </form>
        </main>
    )
}