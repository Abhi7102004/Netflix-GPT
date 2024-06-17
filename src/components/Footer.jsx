import React from "react";

const Footer = () => {
  return (
    <>
    <p className="text-white lg:mx-36 md:mx-24 mx-4 mt-8">
          Questions? Call{" "}
          <span className="underline text-white">+91-8840-63X-XXX</span>{" "}
    </p>
    <div className="lg:mx-36 md:mx-28 mx-4 pt-10 pb-24">
      <ul className="text-white gap-y-3 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        <li><a className="underline" href="https://help.netflix.com/en/node/412">FAQ</a></li>
        <li><a className="underline" href="https://help.netflix.com/en">Help Centre</a></li>
        <li>Account</li>
        <li>Media Centre</li>
        <li><a className="underline" href="https://ir.netflix.net/ir-overview/profile/default.aspx">Investor Relations</a></li>
        <li><a className="underline" href="https://jobs.netflix.com/">Jobs</a></li>
        <li><a className="underline" href="https://help.netflix.com/en/node/14361">Ways to Watch</a></li>
        <li><a className="underline" href="https://help.netflix.com/legal/termsofuse">Terms of Use</a></li>
        <li><a className="underline" href="https://help.netflix.com/legal/privacy">Privacy</a></li>
        <li>Cookie Preferences</li>
        <li><a className="underline" href="https://help.netflix.com/en/node/134094">Corporate Information</a></li>
        <li><a className="underline" href="https://help.netflix.com/en/contactus">Contact Us</a></li>
        <li><a className="underline" href="https://fast.com/">Speed Test</a></li>
        <li><a className="underline" href="https://help.netflix.com/legal/notices">Legal Notices</a></li>
        <li>Only on Netflix</li>
      </ul>
    </div>
    </>
  );
};

export default Footer;
