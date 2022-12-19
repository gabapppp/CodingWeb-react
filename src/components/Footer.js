import React from 'react'

function Footer() {
  return (
    <div className="bg-gray-200">
        <div>
          <div className="p-10 bg-gray-800 text-gray-200">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                <div className="mb-5">
                  <h4 className="text-2xl pb-4">Company</h4>
                  <p className="text-gray-500">
                    UIT, Linh Trung <br />
                    Thu Duc <br />
                    TP HCM <br /> <br />
                    <strong>Phone:</strong>+84 0999999999 <br />
                    <strong>Email:</strong>info@gmail.com <br />
                  </p>
                </div>
                <div className="mb-5">
                  <h4 className="text-2xl pb-4">Useful links</h4>
                  <ul className="text-gray-500">
                    <li className="pb-4">
                      <a href="#" className="hover:text-yellow-500">Home</a>
                    </li>
                    <li className="pb-4">
                      <a href="#" className="hover:text-yellow-500">Blog</a>
                    </li>
                    <li className="pb-4">
                      <a href="#" className="hover:text-yellow-500">Coding</a>
                    </li>
                    <li className="pb-4">
                      <a href="#" className="hover:text-yellow-500">Pricing</a>
                    </li>
                  </ul>
                </div>
                <div className="mb-5">
                  <h4 className="text-2xl pb-4"> Our Service</h4>
                  <ul className="text-gray-500">
                    <li className="pb-4">
                      <a href="#" className="hover:text-yellow-500">IDE online</a>
                    </li>
                    <li className="pb-4">
                      <a href="#" className="hover:text-yellow-500">Coding example</a>
                    </li>
                    <li className="pb-4">
                      <a href="#" className="hover:text-yellow-500">Learn basic programming</a>
                    </li>
                  </ul>
                </div>
                <div className="mb-5">
                  <h4 className="text-2xl pb-4">Join Our Newsletter</h4>
                  <p className="text-gray-500 pb-2">Join 999+ others and never miss out new tips, tutorial, and more!</p>
                  <form className="flex flex-row flex-wrap">
                    <input type="text" className="text-gray-500 w-2/3 p-2 focus:border-yellow-500 " placeholder="email@example.com" />
                    <button className="p-2 w-1/3 bg-yellow-500 text-white hover:bg-yellow-600">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-900 text-gray-500 px-10">
          <div>
            <div className="text-center">
              <div>
                Copyright <strong> <span>company</span></strong>.All Rights Reserved
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Footer