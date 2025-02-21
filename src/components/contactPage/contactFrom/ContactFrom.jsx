const ContactFrom = () => {
  const handelContact = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const massage = form.masage.value;
    console.log(name, email, massage, phone);
    form.reset();
  };
  return (
    <div>
      <div className="card bg-[#F3F3F3] p-[70px] w-full shrink-0 shadow-2xl mb-[130px]">
        <form onSubmit={handelContact} className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex justify-between col-span-2 items-center space-x-5">
              <div className="form-control w-full">
                <fieldset className="fieldset">
                  <label>name</label>
                  <input
                    type="text"
                    name="name"
                    className="input w-full h-[57px]"
                    placeholder="Type here"
                  />
                </fieldset>
              </div>
              <div className="form-control w-full">
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">email</legend>
                  <input
                    type="email"
                    name="email"
                    className="input w-full h-[57px]"
                    placeholder="Type here"
                  />
                </fieldset>
              </div>
            </div>
            <div className="form-control col-span-2 w-full">
              <fieldset className="fieldset">
                <label>phone</label>
                <input
                  type="text"
                  name="phone"
                  className="input w-full h-[57px]"
                  placeholder="Type here"
                />
              </fieldset>
            </div>
            <div className="lg:col-span-2 text-start">
              <label>massage</label>
              <textarea
                placeholder="Enter your message here..."
                name="masage"
                type="text"
                className="w-full h-[200px] rounded-2xl bg-[#FFFFFF] text-start p-4"
                required
              />
            </div>
          </div>
          <div className="form-control mt-6 w-full">
            <button className="btn w-full h-[56px] bg-[#FF3811] hover:bg-green-700 capitalize">
              order confrim
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactFrom;
