import Image from "next/image";
import cfo_image from "../../components/assets/cfo_image.png";
import Banner from "../../components/dap/Banner";
import Sidebar from "../../components/dap/Sidebar";

const cfo = () => {
  return (
    <section >
      <Banner />
      <div className="flex flex-row mx-auto custom-container">
        <Sidebar/>
        <article className="text-black prose-xl font-Roboto w-[1176px]">
          <div className="text-4xl font-semibold">
            <div>หลักสูตรการประเมินคาร์บอนฟุตพริ้นท์ขององค์กร</div>
            <div>(Carbon Footprint for Organization: CFO)</div>
          </div>
          <hr className="border-2 border-vekin" />
          <p className="text-xl font-bold">หัวหน้าหน่วยวิจัยฯ</p>
          <p className="text-xl ">
            ผู้เข้าร่วมอบรมจะได้เรียนรู้หลักการและวิธีการประเมินคาร์บอนฟุตพริ้นท์ขององค์กร
            ตามแนวทาง การประเมินคาร์บอน ฟุตพริ้นท์ขององค์กรของ อบก.
            พร้อมกรณีศึกษาและฝึกปฏิบัติคำนวณหา ปริมาณคาร์บอนฟุตพริ้นท์
            ที่เกิดขึ้นจาก การดำเนินกิจกรรมต่างๆ ขององค์กร โดยมีองค์ประกอบของ
            เนื้อหาหลักสูตร ดังนี้
          </p>
          <ul className="text-xl prose-ul">
            <li>1.ความรู้เบื้องต้นเกี่ยวกับคาร์บอนฟุตพริ้นท์องค์กร</li>
            <li>2.กรณีศึกษาการประเมินคาร์บอนฟุตพริ้นท์องค์กร (Case Study)</li>
            <li>
              3.เกณฑ์และวิธีการประเมินคาร์บอนฟุตพริ้นท์ขององค์กร
              ตามแนวทางการประเมินคาร์บอนฟุตพริ้นท์ขององค์กร ของ ประเทศไทยของ
              อบก.
            </li>
            <li>
              4.รายละเอียดเอกสารสำหรับการขอขึ้นทะเบียน CFO ตามรูปแบบของ อบก.
            </li>
            <li>
              5.กิจกรรมกลุ่มฝึกปฏิบัติการประเมินคาร์บอนฟุตพริ้นท์ขององค์กร
              ตามแนวทางการประเมินคาร์บอนฟุตพริ้นท์ของ องค์กรของประเทศไทยของ อบก.
            </li>
          </ul>
          <p className="text-xl font-bold">หลักสูตรนี้เหมาะสำหรับ</p>
          <ul className="text-xl">
            <li>
              1.บุคลากรในระดับผู้บริหารในหน่วยธุรกิจหรือหน่วยกิจกรรมของบริษัท
              สำนักงาน กิจการ โรงงาน หน่วยราชการ หรือ
              สถาบันที่ต้องการประเมินคาร์บอนฟุตพริ้นท์ขององค์กร
            </li>
            <li>
              2.ผู้ประกอบการที่ต้องการสร้างทีมงานด้านการประเมินคาร์บอนฟุตพริ้นท์ภายในองค์กร
            </li>
            <li>
              3.ผู้มีส่วนร่วมรับผิดชอบ
              ผู้ควบคุมหรือผู้ดูแลโครงการก๊าซเรือนกระจกขององค์กร
            </li>
          </ul>
          <p className="text-xl font-bold">เป้าประสงค์</p>
          <ul className="text-xl">
            <li>
              1.เข้าใจหลักการและวิธีการประเมินคาร์บอนฟุตพริ้นท์ขององค์กร
              และสามารถคำนวณปริมาณ คาร์บอนฟุตพริ้นท์ที่เกิดขึ้น
              จากการดำเนินกิจกรรมต่างๆ ขององค์กรได้
            </li>
            <li>
              2.สามารถปรับใช้ความรู้ที่ได้รับในการวิเคราะห์และหาแนวทางการกำหนดมาตรการบริหารจัดการเพื่อลดการปล่อยแก๊สเรือนกระจกได้อย่างเหมาะสม
              จนขยายผลและเพิ่มขีดความสามารถในการแข่งขัน
              ขององค์กรทั้งในประเทศไทยแล ในเวที การค้าโลก
            </li>
          </ul>
          <p className="text-xl font-bold">ระยะเวลาของหลักสูตร</p>
          <p className="text-xl ">
            ผู้เข้าร่วมอบรมจะได้เรียนรู้ทั้งทฤษฎีและฝึกปฏิบัติการ
            รวมจำนวนทั้งหมด 2 วัน
          </p>

          <Image src={cfo_image} alt="cfo" width={1176} height={1664} />
        </article>
      </div>
    </section>
  );
};

export default cfo;