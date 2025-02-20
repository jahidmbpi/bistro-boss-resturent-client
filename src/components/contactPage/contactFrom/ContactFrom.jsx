const ContactFrom = () => {
  return (
    <div>
      <div className="card bg-[#F3F3F3] p-[70px] w-full shrink-0 shadow-2xl mb-[130px]">
        <form className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <fieldset className="fieldset">
                <label>name</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Type here"
                />
              </fieldset>
            </div>
            <div className="">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">What is your name?</legend>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Type here"
                />
              </fieldset>
            </div>
            <div className="form-control col-span-2 w-full">
              <fieldset className="fieldset">
                <label>name</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Type here"
                />
              </fieldset>
            </div>
            <div className="lg:col-span-2 text-start">
              <textarea
                placeholder="Enter your message here..."
                name="masage"
                className="w-full h-[200px] rounded-2xl bg-[#FFFFFF] text-start p-4"
                required
              />
            </div>
          </div>
          <div className="form-control mt-6 w-full">
            <button className="btn w-full bg-[#FF3811] capitalize">
              order confrim
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactFrom;
