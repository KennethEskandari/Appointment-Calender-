const Appointment = () => {
    return ( 
         <div>
            <h1>
                Fill Out Form to Make Appointment
            </h1>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <br />
                <label>
                    Phone Number:
                    <input type="tel" name="phone" />
                </label>
                <br />
                <label>
                    Date:
                    <input type="date" name="date" />
                </label>
                <br />
                <label>
                    Time:
                    <input type="time" name="time" />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
         </div>
    )
}
export default Appointment;