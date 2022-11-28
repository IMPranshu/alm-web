import React, { useState, useRef, useEffect } from 'react';
import Transition from '../../utils/Transition';

function DashboardCard12() {

  function button1() {
    document.getElementById("id1").style.visibility = "hidden";
}



  const [accountsDropdownOpen, setAccountsDropdownOpen] = useState(false);

  const accountsTrigger = useRef(null);
  const accountsDropdown = useRef(null);



  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!accountsDropdownOpen || accountsDropdown.current.contains(target) || accountsTrigger.current.contains(target)) return;
      setAccountsDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!accountsDropdownOpen || keyCode !== 27) return;
      setAccountsDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  const [durationDropdownOpen, setDurationDropdownOpen] = useState(false);

  const durationTrigger = useRef(null);
  const durationDropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!durationDropdownOpen || durationDropdown.current.contains(target) || durationTrigger.current.contains(target)) return;
      setDurationDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!durationDropdownOpen || keyCode !== 27) return;
      setDurationDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });





  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Target a specific set of Population</h2>
      </header>
      <div className="p-3">

        {/* Card content */}
        <div className="relative inline-flex">
          <ul className="my-1">
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-rose-500 my-2 mr-3">
                <svg className="w-9 h-9 fill-current text-rose-50" viewBox="0 0 36 36">
                  <path d="M25 24H11a1 1 0 01-1-1v-5h2v4h12v-4h2v5a1 1 0 01-1 1zM14 13h8v2h-8z" />
                </svg>
              </div>
              <div className="grow flex items-center border-b border-slate-100 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center">Select
                  <button
        ref={accountsTrigger}
        className="btn bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600"
        aria-haspopup="true"
        onClick={() => setAccountsDropdownOpen(!accountsDropdownOpen)}
        aria-expanded={accountsDropdownOpen}
      >
                  <p className="font-bold text-slate-800" >Delinquent </p></button>
                  <Transition
        show={accountsDropdownOpen}
        tag="div"
        className="origin-top-right z-10 absolute top-full left-0 right-auto md:left-auto md:right-0 min-w-56 bg-white border border-slate-200 pt-1.5 rounded shadow-lg overflow-hidden mt-1"
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div ref={accountsDropdown}>
          <div className="text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-4">Options</div>
          <ul className="mb-4">
            <li className="py-1 px-3">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-sm font-medium ml-2">Non-Delinquent</span>
              </label>
            </li>
            <li className="py-1 px-3">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-sm font-medium ml-2">Default</span>
              </label>
            </li>
            <li className="py-1 px-3">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-sm font-medium ml-2">No-Default</span>
              </label>
            </li>
            <li className="py-1 px-3">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-sm font-medium ml-2">New</span>
              </label>
            </li>
          </ul>
          <div className="py-2 px-3 border-t border-slate-200 bg-slate-50">
            <ul className="flex items-center justify-between">
              <li>
                <button className="btn-xs bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600">Clear</button>
              </li>
              <li>
                <button className="btn-xs bg-indigo-500 hover:bg-indigo-600 text-white" onClick={() => setAccountsDropdownOpen(false)} onBlur={() => setAccountsDropdownOpen(false)}>Apply</button>
              </li>
            </ul>
          </div>
        </div>
        </Transition>
                  accounts for
                  <button
        ref={durationTrigger}
        className="btn bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600"
        aria-haspopup="true"
        onClick={() => setDurationDropdownOpen(!durationDropdownOpen)}
        aria-expanded={durationDropdownOpen}
      >
                  <p className="font-bold text-slate-800 hover:text-slate-900"> last 6 months</p></button>
                  <Transition
        show={durationDropdownOpen}
        tag="div"
        className="origin-top-right z-10 absolute top-full left-0 right-auto md:left-auto md:right-0 min-w-56 bg-white border border-slate-200 pt-1.5 rounded shadow-lg overflow-hidden mt-1"
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div ref={durationDropdown}>
          <div className="text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-4">Timeline</div>
          <ul className="mb-4">
            <li className="py-1 px-3">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-sm font-medium ml-2">last 3 months</span>
              </label>
            </li>
            <li className="py-1 px-3">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-sm font-medium ml-2">last 9 months</span>
              </label>
            </li>
            <li className="py-1 px-3">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-sm font-medium ml-2">last 12 months</span>
              </label>
            </li>
            <li className="py-1 px-3">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-sm font-medium ml-2">last 18 months</span>
              </label>
            </li>
          </ul>
          <div className="py-2 px-3 border-t border-slate-200 bg-slate-50">
            <ul className="flex items-center justify-between">
              <li>
                <button className="btn-xs bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600">Clear</button>
              </li>
              <li>
                <button className="btn-xs bg-indigo-500 hover:bg-indigo-600 text-white" onClick={() => setAccountsDropdownOpen(false)} onBlur={() => setAccountsDropdownOpen(false)}>Apply</button>
              </li>
            </ul>
          </div>
        </div>
        </Transition>
        </div>

                  <div className="shrink-0 self-end ml-2">

                    <button onClick="button1()" className="font-medium text-indigo-500 hover:text-indigo-600">View<span className="hidden sm:inline"> -&gt;</span></button>

                  </div>

                  <div class="d1" id ="id1">Test</div>

                </div>
              </div>
            </li>
          </ul>
        </div>


      </div>
    </div>
  );
}

export default DashboardCard12;
