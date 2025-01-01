import ux from "../Assets/blogsection/UX.svg";

import oliva from "../Assets/blogsection/olivarhye.svg";
import linear from "../Assets/blogsection/linear.svg";
import phoenix from "../Assets/blogsection/phoenix baker.svg";
import stack from "../Assets/blogsection/stack.svg";
import lan from "../Assets/blogsection/lanasteiner.svg";



export const blogs = [
    {
      image: ux,
      category: "Design",
      title: "UX review presentations",
      description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
      authorImage: oliva,
      authorName: "Oliva Rhye",
      date: "20 Jan 2024",
    },
    {
      image: linear,
      category: "Product",
      title: "Streamlining Software Projects",
      description: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
      authorImage: phoenix,
      authorName: "Phoenix Baker",
      date: "19 Jan 2024",
    },
    {
      image: stack,
      category: "Software Engineering",
      title: "Building your API stack",
      description: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      authorImage: lan,
      authorName: "Lana Steiner",
      date: "18 Jan 2024",
    },
  ];