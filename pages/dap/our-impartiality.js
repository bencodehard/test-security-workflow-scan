import Banner from "../../components/dap/Banner";
import Sidebar from "../../components/dap/Sidebar";
import Image from "next/image";
import download_icon from "../../components/dap/icon/download.png"
import rounded_icon from "../../components/dap/icon/rounded.png"

const ourImpartiality = () => {
  return (
    <section>
      <Banner />
      <div className="flex flex-row mx-auto custom-container">
        <Sidebar />
        <article className="text-black prose-xl font-Roboto w-[1176px]">
            <div className="text-4xl font-semibold">
                <div>ดำเนินการในรูปแบบ Digital MRV</div>
                <div>(Monitoring Reporting Verification)</div>
            </div>
            <hr className="border-2 border-vekin" />
            <div className="flex justify-between">
            <div className="text-xl">
                <div>ดำเนินการในรูปแบบ Digital MRV</div>
                <div>(Monitoring Reporting Verification)</div>
            </div>

            <div className="border border-vekin rounded-lg px-14 py-10 flex flex-col items-center justify-center">
                <div className="rounded-full bg-vekin w-[120px] h-[120px] flex items-center justify-center">
                <Image src={download_icon} alt="" />
                </div>
                <div className="text-vekin text-xl font-semibold">Download</div>
                <div className="text-black text-base">ดาวน์โหลดเอกสาร</div>
            </div>
            </div>
        </article>
      </div>
    </section>
  );
};

export default ourImpartiality;
