import { CredentialResponse, GoogleLogin } from "@react-oauth/google";

export default function Navigation() {
  //function to hanlde sucess or error of login
  const responseGoogleSuccess = async (response: CredentialResponse) => {
    //what do we do here ? make a request to database ? log user in how?
    console.log("login sucess ", response);
  };

  const responseGoogleFail = async () => {
    //show some sort of error message to the user ?
    console.log("login fail ");
  };
  return (
    <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl tails-selected-element bg-primary">
      <div className="relative flex flex-col md:flex-row bg-primary">
        <a
          href="#_"
          className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
        >
          <span className="mx-auto text-xl font-black leading-none text-textprimary select-none">
            CodeNinja
          </span>
        </a>
        <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-textprimary">
          <a
            href="#_"
            className="mr-5 font-medium leading-6 text-accentgreen hover:text-accentgreen"
          >
            Home
          </a>
          <a
            href="#_"
            className="mr-5 font-medium leading-6 text-textprimary hover:text-accentgreen"
          >
            Features
          </a>
          <a
            href="#_"
            className="mr-5 font-medium leading-6 text-textprimary hover:text-accentgreen"
          >
            Pricing
          </a>
          <a
            href="#_"
            className="mr-5 font-medium leading-6 text-textprimary hover:text-accentgreen"
          >
            Contact
          </a>
        </nav>
      </div>

      <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
        <a
          href="#"
          className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-accentblue border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
          data-rounded="rounded-md"
          data-primary="indigo-600"
        >
          Sign In
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              responseGoogleSuccess(credentialResponse);
            }}
            onError={() => {
              return responseGoogleFail();
            }}
          />
          ;
        </a>
      </div>
    </div>
  );
}
