const Contact = () => {
  return (
    <div className="section contact">
      <div className="contact__container">
        <h2 className="section-title">Get in touch</h2>
        <form className="contact__form">
          <input className=" contact__name " type="text" placeholder="Name" />
          <input
            className=" contact__email "
            type="email"
            placeholder="Email"
          />
          <textarea
            className=" contact__message "
            type="text"
            placeholder="MESSAGE"
          ></textarea>
        </form>
      </div>
    </div>
  );
};

export default Contact;
