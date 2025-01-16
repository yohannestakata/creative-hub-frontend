import Image from "next/image";

const AboutPassagePresentation = () => {
  return (
    <section className="grid grid-cols-12 gap-4 px-8 py-16 pb-12">
      <div className="col-span-6 aspect-square overflow-hidden rounded-2xl bg-black">
        <Image
          width={500}
          height={500}
          alt=""
          src="https://images.unsplash.com/photo-1736841096703-d042981a6157?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8cVBZc0R6dkpPWWN8fGVufDB8fHx8fA%3D%3D"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="col-span-6 flex flex-col gap-4">
        <h2 className="font-display text-2xl font-medium leading-none tracking-tighter">
          Celebrating Notable Guests
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et beatae
          nihil possimus. Harum rerum et quas, aliquid deleniti possimus
          assumenda nihil laboriosam aspernatur aperiam perferendis distinctio
          mollitia laborum sit nulla. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Doloribus minus expedita nam tenetur voluptas. Cum,
          in accusantium nisi ipsa quis, doloremque nemo necessitatibus
          consequuntur rerum quae enim, neque veritatis ducimus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          voluptate autem nulla! Ad deserunt saepe iure possimus, libero, fuga
          repellat similique dolores consectetur tenetur doloremque cumque,
          aliquam a soluta eius!
        </p>
      </div>
    </section>
  );
};

export default AboutPassagePresentation;
