import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "WTF is Sign?",
    answer: [
      "Sign is a tech company that's backed by the same VC that invested in Elon Musk's Space X",
      "Sign built 3 Main Core Products (M . F . I = Money 💲 Freedom 🙌 Integrity ✊"
    ]
     
  },
  {
    question: "What is an SBT and Sign BoundToken?",
    answer: [
      "SBT: These are non-transferable NFTs bound to a person's wallet and serve as your attendance to a certain event",
      "Sign BoundToken: Like an SBT but, an SBT on how you contribute to the Orange Dynasty 🫵🧡🦺"
    ]
  },
  {
    question: "How to Get an SBT?",
    answer: [
      " Be active: on X, Telegram, and Discord so Sign Intern and Zoe will see you 🧡👀 ",
      "Become the Best Version of yourselves: No to AI Contents & No to Fake Story Telling, just become you! 🫵🧡👀"
    ]
  },
  {
    question: "What are the Different types of SBTs? ",
    answer: [
      "Certified Serious Builder: Rewarded by the Sign Team and recognized the potential of Sign before it Mainstream. 🦺",
      "Content Creator: Demonstrate your creativity and talent by creating engaging content related to the Sign. 🎥",
      "Orange in the Veins: Consistent participation in community events related to Sign. 🐉",
      "Support Warrior: Consistent on engaging with real support on every content related to Sign. 🪧"
    ]
  },
  {
    question: "What are Sign NFTs? ❤️",
    answer: [
      " If you cannot get an SBT or are too busy with any other convictions, NFTs are the other way to get you closer to Sign.",
      " Just as valuable as an SBT and focused on signees who aren't available to get the SBTs.",
    ]
  },
  {
    question: " If I get followed by Sign Intern Does that make me qualified for an SBT?",
    answer: [
      " It depends if you were followed by Sign in the early days and didn't post anything related to Sign, then NO ❌",
      " If you are followed by Sign and consistently posting any content related to sign, then YES ✔️.",
    ]
  },
  {
    question: "Is to be followed back by Sign Intern the Goal to receive an SBT?",
    answer: [
      " No, but maybe yes, but the real answer is to become the best version of yourself. 🫵🧡",
      " Consistently posting or replying or being active on sign community events is the real goal to receive an SBT. 🫡🧡",
    ]
  },
  {
    question: "What are Sign NFTs? ❤️",
    answer: [
      " If you cannot get an SBT or are too busy with any other convictions, NFTs are the other way to get you closer to Sign.",
      " Just as valuable as an SBT and focused on signees who aren't available to get the SBTs.",
    ]
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
