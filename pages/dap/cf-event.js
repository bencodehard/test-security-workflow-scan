
import Image from "next/image";
import carbonEvent from "../../components/assets/carbonEvent.png";
import Banner from "../../components/dap/Banner";
import Sidebar from "../../components/dap/Sidebar";

const cfEvent = () => {
  return (
    <section>
      <Banner />
      <div className="flex flex-row mx-auto custom-container">
        <Sidebar />
        <article className="text-black prose-xl font-Roboto w-[1176px]">
          <div className="text-4xl font-semibold">
            <div>คาร์บอนฟุตพริ้นท์อีเว้นท์</div>
            <div>(Carbon Footprint of Event: CF-Event)</div>
          </div>

          <hr className="border-2 border-vekin" />

          <p className="text-xl">
            คาร์บอนฟุตพริ้นท์อีเว้นท์ (Carbon Footprint of Event: CF-Event)
            หมายถึง ปริมาณการปล่อยก๊าซ เรือนกระจกจากกิจกรรมการจัดอีเว้นท์
            ซึ่งพิจารณาจากการจัดหาวัตถุดิบ การให้บริการจัดงาน และการ
            จัดการของเสีย ตลอดจน การเดินทางและพักค้างของผู้มาร่วมงาน
            ในรูปของน้ำหนักก๊าซคาร์บอนได ออกไซด์เทียบเท่า (CO2q) ต่ออีเว้นท์
            อ้างอิงกรอบดำเนินงานและขั้นตอนตามแนวทางการประเมิน คาร์บอนผลิตภัณฑ์
            ของ องค์การบริหารจัดการก๊าซเรือนกระจก (องค์การมหาชน)
            ซึ่งเทียบเท่ากับ มาตรฐานสากล ISO 14064
            ผู้ประกอบการให้บริการจัดงานอีเว้นท์ เช่น การจัดงานวิ่งลดโลกร้อน
            การจัดงานสัมมนาลดโลกร้อน การเปิดตัวสินค้าใหม่ใส่ใจโลกร้อน
            มีการประยุกต์ใช้คาร์บอนฟุตพริ้นท์อีเว้นท์เพื่อการสื่อสาร
            ความรับผิดชอบต่อสังคมและสิ่งแวดล้อม
          </p>
          <Image src={carbonEvent} alt="cfo" width={1176} height={1664} />
        </article>
      </div>
    </section>
  );
};

export default cfEvent;
