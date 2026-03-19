import Button from "@/app/components/Button";
import Image from "next/image";
import React from "react";
import pimg from "@/public/images/img.jpg";

export default function Misson() {
  return (
    <div>
      <div>Misson page</div>
      <h3>lorem4aldjfaslkjflajfoejfoad</h3>

      <div className="w-[400]">
        <Image src={pimg} alt="p=img" />
      </div>

      <Button />
    </div>
  );
}
