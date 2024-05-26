import Head from "next/head";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-12">
      <div className="my-5">
        <h4 className="text-xl text-center">Welcome to PetCo Lover</h4>
        <h2 className="text-2xl">Mission Statement:</h2>
        <p>
          At PetCo Lover, our mission is to connect loving families with their
          perfect pet companions. We are dedicated to promoting animal welfare
          and responsible pet ownership by providing a user-friendly platform
          that facilitates pet adoption, offering resources and support to
          ensure every pet finds a forever home. Our goal is to reduce the
          number of homeless pets and improve the lives of animals and their
          adopters alike.
        </p>
      </div>

      <div className="mb-5">
        <h2 className="text-2xl">Team Information:</h2>
        <p>
          The team behind [PetAdopt Haven] is a passionate group of animal
          lovers, veterinarians, and tech enthusiasts who are committed to
          making a difference in the lives of pets and their future owners. Our
          team includes:
        </p>
        <ul>
          <li>
            Sarah Johnson - Founder & CEO: With a background in animal rescue
            and welfare, Sarah leads our mission with compassion and dedication.
          </li>
          <li>
            Dr. Mark Thompson - Chief Veterinary Officer: A licensed
            veterinarian with over 15 years of experience, Dr. Thompson ensures
            that all pets listed on our platform receive proper care and medical
            attention.
          </li>
          <li>
            Emily Davis - Head of Adoption Services: Emily works tirelessly to
            match pets with their perfect families, providing support throughout
            the adoption process.
          </li>
          <li>
            Alex Martinez - Lead Developer: Alex brings our website to life,
            ensuring a seamless and user-friendly experience for all visitors.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
