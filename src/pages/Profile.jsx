const Profile = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-600">
      <div className="border p-4 w-1/3  rounded-xl bg-white/25 text-white">
        <div className="flex justify-between">
          <h1 className="text-2xl uppercase font-semibold tracking-widest">
            Hasibur Rahman Akash
          </h1>
          <img
            src="https://i.ibb.co/8zzhGcR/Logo.png"
            alt=""
            className="w-1/4 opacity-20"
          />
        </div>
        <div className="flex justify-between items-end mt-14"> 
          <div>
            <h1 className="uppercase text-lg tracking-widest opacity-45">
              Web Developer
            </h1>
            <div className="flex gap-3 items-center">
              <a
                href="mailto:hasiburrahmanakash79@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="h-4"
                  src="https://cdn.icon-icons.com/icons2/2642/PNG/512/google_mail_gmail_logo_icon_159346.png"
                  alt=""
                />
              </a>
              <a
                href="fb"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="h-5"
                  src="https://www.freeiconspng.com/thumbs/linkedin-logo-png/displaying-19-gallery-images-for-linkedin-logo-png-25.png"
                  alt=""
                />
              </a>
              <a
                href="li"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="h-4"
                  src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-icon-white-PNG-large-size.png"
                  alt=""
                />
              </a>
              <p>/ hasiburRahmanAkash</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img
              className="h-6"
              src="https://iconape.com/wp-content/png_logo_vector/tailwind-css-logo.png"
              alt=""
            />
            <img
              className="h-6"
              src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

