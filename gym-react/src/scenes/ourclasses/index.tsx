
import { SelectedPage, ClassType } from "../../shared/types";
import HText from "../../shared/HText";
import Class from "./Class";

import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";

import { motion } from "framer-motion";



const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description: "We have bodybuilding classes where you can test your strength, resistance and you will learn the techniques and secrets of weight training.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description: "We believe that inner peace, the reflection and externalization of what you have inside has to be channeled in a positive way to achieve a positive impact on your body, if you also believe this is your class!",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description: "There is nothing more attractive and healthy than a healthy and marked abdomen.This requires discipline, movement and lots of fun.",
    image: image3,
  },
  {
    name: "Dance Classes",
    description: "Movement, technique and friendship. We can provide the perfect environment for you to learn and channel all that aggressiveness, always sportingly, with respect, teaching with the best and lots of fun.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description: "Fitness is not just going to the gym and lifting weights, it is also a lifestyle, if you want to change your life, gain more flexibility, strength and look better, while learning HEALTHY HABITS this is your place",
    image: image5,
  },
  {
    name: "Much More",
    description: "Crossfit, Zumba, Spinning, Acrobatics, Parkour, Rhythmic dances and martial arts.We want to connect with you and connect with your body in the way you like best.",
    image: image6,
  },
]





type Props = {
  setSelectedPage: (value: SelectedPage) => void
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40" >
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
          <motion.div 
            className="mx-auto w-5/6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="md:w-3/5">
              <HText>OUR CLASSES</HText>
              <p className="py-5">
                We have an infinity of classes that can be adapted to you, your tastes and objectives.
                Feel free to try any discipline until you find the one that is ideal for you!
              </p>
            </div>
          </motion.div>
          <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
            <ul className="w-[2800px] whitespace-nowrap">
              {classes.map((item: ClassType, index) => (
                <Class 
                  key={`${item.name}-${index}`}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                />
              ))}
            </ul>
          </div>
        </motion.div>
    </section>
  )
};

export default OurClasses;