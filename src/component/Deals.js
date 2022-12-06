import React from "react";
import Contentitle from "../component/Contentitle";
import LeftContent from "../component/LeftContent";
import RightContent from "./RightContent";

function Deals() {
  const ArrLeft = [
    {
      title:
        "បវរកញ្ញា ម៉ិកស៊ិក ម្នាក់ឆក់ចរន្តអគ្គិសនីដាច់ផ្ងារ អំឡុងពេលឡើងប្រកួតលើកឆាក",
      image: "./r21.jpg",
    },
    {
      title:
        "រំភើបណាស់! លោកតា គង់ ណៃ មានស្នាដៃ គ្រប់គ្នាសឹងតែភ្លេច តែត្រូវបានលើកតម្កើងដោយ វណ្ណដា",
      image: "./r22.jpg",
    },
    {
      title:
        "ក្រៅពីការសម្ដែងរបស់ កញ្ញា G-Devith និង វណ្ណដា ក៏នៅមានទស្សនីយភាពអស្ចារ្យផ្សេងទៀតនៅពិធីបិទកីឡាជាតិលើកទី ៣",
      image: "./r23.jpg",
    },
    {
      title: "ពិតអត់? ទ្រី ដាណា ប្រកាសពេលរៀបការជាក់លាក់ជាមួយ សេង មង្គល",
      image: "./r24.jpg",
    },
    {
      title:
        "ក្ដីក្ដាំរបស់ សេង សុឃីម ជាមួយ មាស នីតា នឹងចូលដល់ដៃតុលាការរាជធានីភ្នំពេញ​ នៅរសៀលនេះ",
      image: "./r25.jpg",
    },
    {
      title:
        "តុលាការ យល់ស្របលក្ខខណ្ឌចំនួន២ ព្រមឱ្យ Pinky នៅក្រៅឃុំបណ្ដោះអាសន្ន",
      image: "./r26.jpg",
    },
    {
      title:
        "ស្ប៉តពាណិជ្ជកម្មរបស់ Sting ល្បីមិនត្រឹមតែនៅកម្ពុជា តែកក្រើកដល់ប្រទេសចំនួន ២ ផ្សេងទៀត",
      image: "./r27.jpg",
    },
    {
      title:
        "អាណិតណាស់! កូនៗស៊ូទ្រាំមើលថែម្តាយមិនហ៊ានគេង ក្រោយ សឿ សុធារ៉ា ចូលមន្ទីរពេទ្យ",
      image: "./r28.jpg",
    },
  ];
  return (
    <div className="relative mt-[130px]">
      <Contentitle
        title="Deals"
        bgcolor="bg-slate-500"
      />
      <div className="overflow-hidde -mt-[50px] mb-5 shadow-lg">
        <div className="flex flex-row overflow-x-scroll md:grid md:grid-cols-4 md:overflow-x-hidden lg:grid-cols-7">
          <div className="grid md:col-span-2 md:p-5 lg:col-span-3">
            <div className="hidden md:block">
              <LeftContent
                bg="bg-slate-500"
                title="លោក នីកូ បានបង្ហើបឱ្យដឹងថា រូបលោកក្លាយជាទូតសុឆន្ទៈរបស់ផលិតផលថ្នាំដុសធ្មេញ Closeup"
                image="./r1.jpg"
              />
            </div>
          </div>
          <div className="p-5 md:col-span-2 md:grid lg:col-span-4">
            <div className="flex grid-cols-2 gap-2 md:grid md:grid-cols-2 lg:grid-cols-4">
              {ArrLeft.map((item, ind) => (
                <RightContent image={item.image} title={item.title} key={ind} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deals;
