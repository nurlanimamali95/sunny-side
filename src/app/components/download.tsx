function DownloadButton() {
  return (
    <div>
      <button className="relative group overflow-hidden pl-6 h-14 flex space-x-6 items-center bg-mid-yellow">
        <span className="relative uppercase text-base text-primary-black ">
          Download
        </span>
        <div
          aria-hidden="true"
          className="w-14 bg-mid-yellow transition duration-300 -translate-y-7 group-hover:bg-dark-yellow group-hover:translate-y-7"
        >
          <div className="h-14 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 m-auto fill-primary-black"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="h-14 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 m-auto fill-primary-black"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </button>
    </div>
  );
}

export default function DownloadSection() {
  return (
    <div>
      <div className="max-w-[20rem] bg-primary-black text-white-yellow hover:text-dark-yellow p-4 h-fit rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">Download Our Menu</h3>
        <p className="text-sm mb-6">
          Want to keep a copy of our menu for later? You can download it in PDF
          format.
        </p>
        <a href="/images/menu.pdf" download>
          <DownloadButton />
        </a>
      </div>
    </div>
  );
}
