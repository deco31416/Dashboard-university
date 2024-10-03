export default function QuizApp() {
    return (
        <div className="w-full">
            <div className="ml-4 mt-2">
                <span className="text-2xl font-bold">Quiz App</span>
            </div>
            <QuizQuestion />
        </div>
    )
}

function QuizQuestion() {
    return (
        <div className="mt-2 mx-4 bg-white rounded-xl shadow-lg w-full border rounded-md">
            <div className="p-8 mx-4">
                <div className="flex flex-row mb-4">
                    <div className="mr-3 mt-4 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                    <div className="flex items-center justify-center bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_687_7097)">
                                <path d="M4 7H7C7.26522 7 7.51957 6.89464 7.70711 6.70711C7.89464 6.51957 8 6.26522 8 6V5C8 4.46957 8.21071 3.96086 8.58579 3.58579C8.96086 3.21071 9.46957 3 10 3C10.5304 3 11.0391 3.21071 11.4142 3.58579C11.7893 3.96086 12 4.46957 12 5V6C12 6.26522 12.1054 6.51957 12.2929 6.70711C12.4804 6.89464 12.7348 7 13 7H16C16.2652 7 16.5196 7.10536 16.7071 7.29289C16.8946 7.48043 17 7.73478 17 8V11C17 11.2652 17.1054 11.5196 17.2929 11.7071C17.4804 11.8946 17.7348 12 18 12H19C19.5304 12 20.0391 12.2107 20.4142 12.5858C20.7893 12.9609 21 13.4696 21 14C21 14.5304 20.7893 15.0391 20.4142 15.4142C20.0391 15.7893 19.5304 16 19 16H18C17.7348 16 17.4804 16.1054 17.2929 16.2929C17.1054 16.4804 17 16.7348 17 17V20C17 20.2652 16.8946 20.5196 16.7071 20.7071C16.5196 20.8946 16.2652 21 16 21H13C12.7348 21 12.4804 20.8946 12.2929 20.7071C12.1054 20.5196 12 20.2652 12 20V19C12 18.4696 11.7893 17.9609 11.4142 17.5858C11.0391 17.2107 10.5304 17 10 17C9.46957 17 8.96086 17.2107 8.58579 17.5858C8.21071 17.9609 8 18.4696 8 19V20C8 20.2652 7.89464 20.5196 7.70711 20.7071C7.51957 20.8946 7.26522 21 7 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V17C3 16.7348 3.10536 16.4804 3.29289 16.2929C3.48043 16.1054 3.73478 16 4 16H5C5.53043 16 6.03914 15.7893 6.41421 15.4142C6.78929 15.0391 7 14.5304 7 14C7 13.4696 6.78929 12.9609 6.41421 12.5858C6.03914 12.2107 5.53043 12 5 12H4C3.73478 12 3.48043 11.8946 3.29289 11.7071C3.10536 11.5196 3 11.2652 3 11V8C3 7.73478 3.10536 7.48043 3.29289 7.29289C3.48043 7.10536 3.73478 7 4 7" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_687_7097">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <span className="mx-2 text-lg">3/10</span>
                    </div>
                </div>
                <div className="text-lg font-semibold mb-6">QUESTION 3 OF 10</div>
                <div className="text-xl font-semibold mb-4">What was Yat Siu's role in establishing Hong Kong Cybercity/Freenation?</div>
                <div className="space-y-4 mb-6">
                    <button className="flex flex-row w-full text-left px-4 py-3 rounded-lg border border-gray-300 bg-blue-100">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                            <g clip-path="url(#clip0_687_7110)">
                                <rect x="1" y="1" width="22" height="22" rx="7" fill="#141BEB" stroke="#141BEB" stroke-width="2" />
                                <g clip-path="url(#clip1_687_7110)">
                                    <path d="M7.33325 12.0001L10.6666 15.3334L17.3333 8.66675" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                            </g>
                            <defs>
                                <clipPath id="clip0_687_7110">
                                    <rect width="24" height="24" rx="12" fill="white" />
                                </clipPath>
                                <clipPath id="clip1_687_7110">
                                    <rect width="16" height="16" fill="white" transform="translate(4 4)" />
                                </clipPath>
                            </defs>
                        </svg>
                        Co-founder and executive chairman
                    </button>
                    <button className="w-full text-left px-4 py-3 rounded-lg border border-gray-300">
                        CEO
                    </button>
                    <button className="w-full text-left px-4 py-3 rounded-lg border border-gray-300">
                        Chief Technology Officer
                    </button>
                    <button className="w-full text-left px-4 py-3 rounded-lg border border-gray-300">
                        Marketing Director
                    </button>
                </div>
            </div>
            <div className="border-t border-gray-300"></div>
            <div className="bg-[#FDE2E1] w-full text-white p-8 shadow-lg flex justify-between items-center">
                <div className="flex flex-row">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="48" rx="24" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2929 17.2929C17.6834 16.9024 18.3166 16.9024 18.7071 17.2929L24 22.5858L29.2929 17.2929C29.6834 16.9024 30.3166 16.9024 30.7071 17.2929C31.0976 17.6834 31.0976 18.3166 30.7071 18.7071L25.4142 24L30.7071 29.2929C31.0976 29.6834 31.0976 30.3166 30.7071 30.7071C30.3166 31.0976 29.6834 31.0976 29.2929 30.7071L24 25.4142L18.7071 30.7071C18.3166 31.0976 17.6834 31.0976 17.2929 30.7071C16.9024 30.3166 16.9024 29.6834 17.2929 29.2929L22.5858 24L17.2929 18.7071C16.9024 18.3166 16.9024 17.6834 17.2929 17.2929Z" fill="#EF4444" />
                    </svg>
                    <div className="flex flex-col">
                        <span className="text-[#EF4444] font-bold text-2xl ml-2 mt-1">Incorrect!</span>
                        <span className="text-[#EF4444] text-sm ml-2">Chief Technology Officer</span>
                    </div>
                </div>
                <button className="flex flex-row text-lg py-2 px-4 bg-[#EF4444] rounded">
                    NEXT
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1 ml-2">
                        <path d="M8.00065 3.33398L6.82565 4.50898L11.4757 9.16732H1.33398V10.834H11.4757L6.82565 15.4923L8.00065 16.6673L14.6673 10.0007L8.00065 3.33398Z" fill="white" />
                    </svg>
                </button>
            </div>
        </div>
    );
}