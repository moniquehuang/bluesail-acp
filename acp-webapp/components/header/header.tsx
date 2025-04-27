import { CurrentUserAvatar } from "./current-user-avatar"

export function Header() {
    return (
      <div className="justify-between items-center mb-8 flex">
            <p className="text-4xl font-normal">John Jones' Dashboard</p>
            <div className="items-center flex">
              <div className="items-center flex">
              <CurrentUserAvatar />
                <span className="ml-2">Client</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="Windframe_tdd1NHyVU">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>
    )
  }