import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, User, Heart, Baby, BookOpen } from "lucide-react";
import youthImg from "@/assets/yout.jpeg";
import menImg from "@/assets/men.jpeg";
import womenImg from "@/assets/Women.jpeg";
import childrenImg from "@/assets/Children.jpeg";
import discipleshipImg from "@/assets/Discipleship.jpeg";

const ministries = [
  {
    icon: Users,
    image: youthImg,
    title: "Youth Ministry",
    slug: "youth",
    desc: "Empowering the next generation to live out their faith boldly through worship, mentorship, and purposeful community.",
  },
  {
    icon: User,
    image: menImg,
    title: "Men's Ministry",
    slug: "men",
    desc: "Raising godly men of integrity, vision, and spiritual strength to lead their families and impact society.",
  },
  {
    icon: Heart,
    image: womenImg,
    title: "Women's Ministry",
    slug: "women",
    desc: "Empowering women to grow in faith, purpose, and sisterhood through prayer, discipleship, and fellowship.",
  },
  {
    icon: Baby,
    image: childrenImg,
    title: "Children's Ministry",
    slug: "children",
    desc: "Nurturing young hearts with biblical foundations through fun, age-appropriate, and Christ-centered activities.",
  },
  {
    icon: BookOpen,
    image: discipleshipImg,
    title: "Discipleship",
    slug: "discipleship",
    desc: "Walking believers from new birth into spiritual maturity through the systematic study and application of God's Word.",
  },
];

const MinistriesSection = () => {
  return (
    <section id="ministries" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-body font-semibold tracking-[0.2em] uppercase text-base mb-3">
            Our Ministries
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-black mb-6">
            Discover Your <span className="text-vibrant-gradient">Place</span>
          </h2>
          <p className="text-muted-foreground font-body text-xl max-w-2xl mx-auto leading-relaxed">
            Every member has a part to play in building God's kingdom. Find where you belong and grow with us.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {ministries.map((ministry, i) => (
            <motion.div
              key={ministry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card border border-border rounded-2xl p-8 text-center hover:border-secondary/60 transition-all duration-500 hover:glow-purple flex flex-col"
            >
              <div className="mb-6 overflow-hidden rounded-2xl">
                <img
                  src={ministry.image}
                  alt={ministry.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-blue-purple-gradient flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ministry.icon size={32} className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">{ministry.title}</h3>
              <p className="text-muted-foreground font-body text-base leading-relaxed mb-6 flex-1">
                {ministry.desc}
              </p>
              <Link
                to={`/Contact`}
                className="inline-block bg-vibrant-gradient text-primary-foreground font-body font-bold text-sm uppercase tracking-wide px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity"
              >
                Serve With Us
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MinistriesSection;
