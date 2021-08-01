
export default function SearchBar() {
    return (
        <div className="search-bar">
            {/* <h5 className="search-bar__title">search bar</h5> */}
            <div className="flex items-center">
                <div className="search-bar__input-box flex">
                    <input className="search-bar__input-box_input" placeholder="Search..." />
                    <button className="search-bar__input-box_btn">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.742 10.344C12.7103 9.0227 13.144 7.3845 12.9563 5.75716C12.7687 4.12982 11.9735 2.63335 10.7298 1.56714C9.48616 0.50093 7.88579 -0.0563875 6.24888 0.00668566C4.61197 0.0697588 3.05923 0.748571 1.90131 1.90732C0.743395 3.06606 0.0656939 4.61929 0.00379204 6.25624C-0.0581098 7.8932 0.500353 9.49317 1.56745 10.7361C2.63455 11.9789 4.13159 12.7731 5.75906 12.9596C7.38654 13.1461 9.02442 12.7112 10.345 11.742H10.344C10.374 11.782 10.406 11.82 10.442 11.857L14.292 15.707C14.4796 15.8946 14.7339 16.0001 14.9992 16.0002C15.2645 16.0003 15.5189 15.895 15.7065 15.7075C15.8942 15.52 15.9997 15.2656 15.9997 15.0004C15.9998 14.7351 15.8946 14.4806 15.707 14.293L11.857 10.443C11.8213 10.4068 11.7828 10.3734 11.742 10.343V10.344ZM12 6.50001C12 7.22228 11.8578 7.93748 11.5814 8.60477C11.305 9.27206 10.8999 9.87837 10.3891 10.3891C9.87841 10.8998 9.27209 11.3049 8.6048 11.5813C7.93751 11.8577 7.22231 12 6.50004 12C5.77777 12 5.06258 11.8577 4.39528 11.5813C3.72799 11.3049 3.12168 10.8998 2.61096 10.3891C2.10023 9.87837 1.69511 9.27206 1.41871 8.60477C1.14231 7.93748 1.00004 7.22228 1.00004 6.50001C1.00004 5.04132 1.57951 3.64237 2.61096 2.61092C3.64241 1.57947 5.04135 1.00001 6.50004 1.00001C7.95873 1.00001 9.35768 1.57947 10.3891 2.61092C11.4206 3.64237 12 5.04132 12 6.50001Z" fill="#686868" />
                        </svg>
                    </button>
                </div>

                <button className="search-bar__filter-btn">
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.767456 1.76564C0.767456 1.52943 0.861291 1.30289 1.02832 1.13586C1.19534 0.968835 1.42188 0.875 1.65809 0.875H12.3457C12.5819 0.875 12.8085 0.968835 12.9755 1.13586C13.1425 1.30289 13.2364 1.52943 13.2364 1.76564V4.43755C13.2363 4.67374 13.1425 4.90024 12.9754 5.06723L8.78319 9.25946V12.4533C8.78314 12.6895 8.68927 12.916 8.52223 13.083L6.74096 14.8642C6.6164 14.9888 6.45772 15.0735 6.28498 15.1079C6.11224 15.1422 5.93319 15.1246 5.77047 15.0572C5.60775 14.9898 5.46867 14.8757 5.3708 14.7293C5.27293 14.5828 5.22068 14.4107 5.22064 14.2346V9.25946L1.02841 5.06723C0.861374 4.90024 0.767506 4.67374 0.767456 4.43755V1.76564Z" fill="white" />
                    </svg>
                    <span>
                        Attribute Filters
                    </span>
                </button>
            </div>
        </div>
    )
}
