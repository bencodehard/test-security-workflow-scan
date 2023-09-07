import Image from "next/image";
import carbon_credit from "../../components/assets/carbon_credit.png";
import Banner from "../../components/dap/Banner";
import Sidebar from "../../components/dap/Sidebar";

const carbonCredit = () => {
  return (
    <section>
      <Banner />
      <div className="flex flex-row mx-auto custom-container">
        <Sidebar />
        <article className="text-black prose-xl mr-10 font-Roboto w-[1176px]">
          <div className="text-4xl font-semibold">
            <div>โครงการลดก๊าซเรือนกระจกภาคสมัครใจตามมาตรฐานของประเทศไทย</div>
            <div>(Thailand Voluntary Emission Reduction Program: T-VER)</div>
          </div>
          <hr className="border-2 border-vekin" />
          <p className="text-xl">
            โครงการลดก๊าซเรือนกระจกภาคสมัครใจตามมาตรฐานของประเทศไทย (Thailand
            Voluntary Emission Reduction Program: T-VER) หมายถึง
            การดำเนินโครงการลดก๊าซเรือนกระจกภาค สมัครใจ ตามมาตรฐานของประเทศไทย
            (Thailand Voluntary Emission Reduction Program: T-VER)
            ที่ผ่านการรับรองปริมาณก๊าซเรือนกระจกที่ลดลงได้และขึ้นทะเบียนปริมาณคาร์บอนเครดิต
            เพื่อซื้อขายในระบบตลาดคาร์บอน อ้างอิงระเบียบวิธีการ (Methodology)
            ที่ อบก.
            กำหนดผู้พัฒนาโครงการลดก๊าซเรือนกระจกที่ต้องการซื้อขายคาร์บอนเครดิต
            จะนำระเบียบวิธีการไปประยุกต์ ใช้กับโครงการลดก๊าซเรือนกระจกภาคสมัครใจ
            ตามมาตรฐานของประเทศไทย (Thailand Voluntary Emission Reduction
            Program: T-VER) เพื่อขอรับรองปริมาณก๊าซเรือนกระจกที่ลดลงได้และขึ้น
            ทะเบียนปริมาณคาร์บอนเครดิต
          </p>
          <p className="text-xl ">
            โครงการลดก๊าซเรือนกระจกภาคสมัครใจตามมาตรฐานของประเทศไทย (Thailand
            Voluntary Emission Reduction Program: T-VER) ได้แก่
          </p>
          <ul className="text-xl prose-ul">
            <li>
              1.การผลิตไฟฟ้าและน้ำเย็นจากระบบผลิตพลังงานร่วมเพื่อทดแทนระบบผลิตพลังงานแบบแยกส่วน
              (Power Generation and Chilled Water Supply from Combined Heat and
              Power to Replace the Separated System)
            </li>
            <li>
              2.การผลิตพลังงานไฟฟ้าจากพลังงานหมุนเวียน (On-Grid Renewable
              Electricity Generation)
            </li>
            <li>
              3.การปรับเปลี่ยนการใช้เชื้อเพลิงฟอสซิล หรือการเพิ่มสัดส่วนการใช้
              พลังงานหมุนเวียนสำหรับการผลิตพลังงานความร้อน (Switching of Fossil
              Fuel or Increasing of Renewable Energy Utilization to Generate
              Thermal Energy)
            </li>
            <li>
              4.การติดตั้งระบบผลิตพลังงานความร้อนใหม่ทั้งระบบโดยใช้พลังงานหมุนเวียน
              (New Installation of Renewable Energy System to Generate Thermal
              Energy)
            </li>
          </ul>

          <Image src={carbon_credit} alt="cfo" width={1176} height={1664} />
        </article>
      </div>
    </section>
  );
};

export default carbonCredit;
