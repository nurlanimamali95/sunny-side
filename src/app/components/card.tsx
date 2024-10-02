import Image from "next/image";

export default function Cards() {
  return (
    <div className="p-4">
      <div className="flex flex-wrap justify-center gap-6">
        <Item
          title="SunnySide Jordaan Amsterdam"
          subtitle="Prinsengracht 158H, 1016HA"
          workingHours="11 AM - 9 PM"
          eatIn={false}
          contactPerson="Aydin"
          contactNumber="+31 644 773 748"
          message="All products are handmade and tend to sell out very quickly. Please call ahead to check availability before visiting!"
          href="#"
          imageSrc="/images/loc1.jpg"
        />

        <Item
          title="SunnySide IJburg Amsterdam"
          subtitle="IJburglaan 1501, 1087KM"
          workingHours="11 AM - 9 PM"
          eatIn={false}
          contactPerson="Larisa"
          contactNumber="+31 645 761 178"
          message="All products are handmade and tend to sell out very quickly. Please call ahead to check availability before visiting!"
          href="#"
          imageSrc="/images/loc2.jpg"
        />

        <Item
          title="SunnySide Vondel Amsterdam"
          subtitle="Amstelveenseweg 192, 1075XR"
          workingHours="11 AM - 9 PM"
          eatIn={true}
          contactPerson="Irena"
          contactNumber="+31 641 705 040"
          message="All products are handmade and tend to sell out very quickly. Please call ahead to check availability before visiting!"
          href="#"
          imageSrc="/images/loc3.jpg"
        />
      </div>
    </div>
  );
}

interface ItemType {
  title: string;
  subtitle: string;
  href: string;
  imageSrc: string;
  workingHours: string;
  eatIn: boolean;
  contactPerson: string;
  contactNumber: string;
  message: string;
}

function Item({
  title,
  subtitle,
  href,
  imageSrc,
  workingHours,
  eatIn,
  contactPerson,
  contactNumber,
  message,
}: ItemType) {
  return (
    <a
      href={href}
      className="w-full max-w-[30rem] h-fit p-6 border relative overflow-hidden group bg-white"
    >
      <div className="absolute inset-0 bg-mid-yellow translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
      <div className="relative w-full h-[12rem] mb-4 overflow-hidden">
        <div className="relative w-full h-full transition-transform duration-1000 ease-in-out transform group-hover:scale-110">
          <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
        </div>
      </div>
      <h3 className="font-medium text-xl text-primary-black relative z-10 duration-1000">
        {title}
      </h3>
      <p className="text-primary-black relative z-10 duration-1000">
        {subtitle}
      </p>

      <p className="text-sm text-gray-600 mt-2 relative z-10 duration-1000">
        <strong>Working Hours:</strong> {workingHours}
      </p>

      <p className="text-sm  relative z-10 duration-1000">
        <strong>{eatIn ? "Eat-in & Takeaway" : "Takeaway Only"}</strong>
      </p>

      <p className="text-sm mt-2 relative z-10 duration-1000">
        <strong>Contact Person:</strong> {contactPerson}
      </p>
      <p className="text-sm relative z-10 duration-1000">
        <strong>Phone:</strong> {contactNumber}
      </p>

      <p className="text-sm mt-4 relative z-10 duration-1000">
        <strong>Note:</strong> {message}
      </p>
    </a>
  );
}
