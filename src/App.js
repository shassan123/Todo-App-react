import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="w-full h-full font-poppins bg-[#111827] min-h-screen">
      {/* header */}
      <div className="bg-[#1F2937] flex justify-center min-h-[220px] items-center">
        <h1 className="text-[56px] font-semibold leading-[100%] bg-clip-text text-transparent bg-gradient-to-r from-[#656BFF] to-[#FF8787]  ">
          Todo App
        </h1>
      </div>
      {/* main container */}
      <div className="w-full max-w-[624px] h-full mx-auto pt-[50px] bg-[#111827] flex flex-col justify-center items-center gap-8">
        {/*input-button*/}
        <div className="flex  w-full gap-4">
          <input
            className="w-full max-w-[464px] pl-4 border rounded-lg leading-3 bg-[#111827] border-gray-600 text-base   placeholder-gray-600"
            type="text"
            placeholder="Create a new task"
          />
          {/*button-svg*/}
          <button className="flex items-center gap-2 bg-gradient-to-r from-[#656BFF] to-[#FF8787] py-4 px-8 rounded-lg leading-4 text-base font-semibold text-white ">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_972_7068)">
                <path
                  d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 8H10"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 6V10"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_972_7068">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>Create</span>
          </button>
        </div>
        {/*main info*/}
        <div className="w-full flex justify-between">
          {/* left info*/}
          <div className="flex gap-4 items-center">
            <h1 className="text-base font-normal leading-[100%] text-white">
              Create a new task
            </h1>
            <p className="text-base font-normal leading-[100%] text-white bg-gradient-to-r from-[#656BFF] to-[#FF8787] py-1 px-[10px] rounded-[6px]">
              2
            </p>
          </div>
          {/*right info*/}
          <div className="flex gap-4 items-center">
            <h1 className="text-base font-normal leading-[100%] text-white">
              Done Tasks
            </h1>
            <p className="text-base font-normal leading-[100%] text-white bg-gradient-to-r from-[#322EFF] to-[#B121BD] py-1 px-[10px] rounded-[6px]">
              0 of 3
            </p>
          </div>
        </div>
        {/*Dynamic data*/}
        <div className="w-full flex flex-col gap-4">
          {/*first*/}
          <div className="flex justify-between items-center bg-gray-800 p-4 rounded-[4px]">
            {/*checkbox-value*/}
            <div className="flex gap-4 items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_972_7104)">
                  <path
                    d="M12 22C10.0222 22 8.08879 21.4135 6.4443 20.3147C4.79981 19.2159 3.51809 17.6541 2.76121 15.8268C2.00433 13.9996 1.8063 11.9889 2.19215 10.0491C2.578 8.10929 3.53041 6.32746 4.92894 4.92894C6.32746 3.53041 8.10929 2.578 10.0491 2.19215C11.9889 1.8063 13.9996 2.00433 15.8268 2.76121C17.6541 3.51809 19.2159 4.79981 20.3147 6.4443C21.4135 8.08879 22 10.0222 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22ZM12 4C10.4178 4 8.87104 4.4692 7.55544 5.34825C6.23985 6.2273 5.21447 7.47673 4.60897 8.93854C4.00347 10.4003 3.84504 12.0089 4.15372 13.5607C4.4624 15.1126 5.22433 16.538 6.34315 17.6569C7.46197 18.7757 8.88743 19.5376 10.4393 19.8463C11.9911 20.155 13.5997 19.9965 15.0615 19.391C16.5233 18.7855 17.7727 17.7602 18.6518 16.4446C19.5308 15.129 20 13.5823 20 12C20 9.87827 19.1572 7.84344 17.6569 6.34315C16.1566 4.84286 14.1217 4 12 4Z"
                    fill="url(#paint0_linear_972_7104)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_972_7104"
                    x1="12"
                    y1="2"
                    x2="12"
                    y2="22"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#656BFF" />
                    <stop offset="1" stop-color="#FF8787" />
                  </linearGradient>
                  <clipPath id="clip0_972_7104">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h1 className="text-base font-normal leading-[100%] text-white">
                My task 1
              </h1>
            </div>
            {/*delete icon*/}
            <div>
              <svg
                width="24"
                height="24"
                class="svg"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_972_7110)">
                  <path
                    d="M4 7H20"
                    stroke="#9CA3AF"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 11V17"
                    stroke="#9CA3AF"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14 11V17"
                    stroke="#9CA3AF"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5 7L6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19L19 7"
                    stroke="#9CA3AF"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 7V4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4V7"
                    stroke="#9CA3AF"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_972_7110">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="flex justify-between items-center bg-gray-800 p-4 rounded-[4px]">
            {/*checkbox-value*/}
            <div className="flex gap-4 items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_972_7104)">
                  <path
                    d="M12 22C10.0222 22 8.08879 21.4135 6.4443 20.3147C4.79981 19.2159 3.51809 17.6541 2.76121 15.8268C2.00433 13.9996 1.8063 11.9889 2.19215 10.0491C2.578 8.10929 3.53041 6.32746 4.92894 4.92894C6.32746 3.53041 8.10929 2.578 10.0491 2.19215C11.9889 1.8063 13.9996 2.00433 15.8268 2.76121C17.6541 3.51809 19.2159 4.79981 20.3147 6.4443C21.4135 8.08879 22 10.0222 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22ZM12 4C10.4178 4 8.87104 4.4692 7.55544 5.34825C6.23985 6.2273 5.21447 7.47673 4.60897 8.93854C4.00347 10.4003 3.84504 12.0089 4.15372 13.5607C4.4624 15.1126 5.22433 16.538 6.34315 17.6569C7.46197 18.7757 8.88743 19.5376 10.4393 19.8463C11.9911 20.155 13.5997 19.9965 15.0615 19.391C16.5233 18.7855 17.7727 17.7602 18.6518 16.4446C19.5308 15.129 20 13.5823 20 12C20 9.87827 19.1572 7.84344 17.6569 6.34315C16.1566 4.84286 14.1217 4 12 4Z"
                    fill="url(#paint0_linear_972_7104)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_972_7104"
                    x1="12"
                    y1="2"
                    x2="12"
                    y2="22"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#656BFF" />
                    <stop offset="1" stop-color="#FF8787" />
                  </linearGradient>
                  <clipPath id="clip0_972_7104">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h1 className="text-base font-normal leading-[100%] text-white">
                My task 2
              </h1>
            </div>
            {/*delete icon*/}
            <div>
              <svg
                width="24"
                height="24"
                class="svg"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_972_7110)">
                  <path
                    d="M4 7H20"
                    stroke="#9CA3AF"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 11V17"
                    stroke="#9CA3AF"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14 11V17"
                    stroke="#9CA3AF"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5 7L6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19L19 7"
                    stroke="#9CA3AF"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 7V4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4V7"
                    stroke="#9CA3AF"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_972_7110">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
