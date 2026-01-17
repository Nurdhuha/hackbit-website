import Container from "@/components/ui/Container";
import { studioData } from "@/config/studio-data";
import { Plus } from "lucide-react";

export default function FAQ() {
    return (
        <section id="faq" className="py-24 bg-black">
            <Container>
                <div className="grid lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4">
                        <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
                        <p className="text-neutral-400">
                            Masih ragu? Berikut jawaban untuk pertanyaan yang sering diajukan klien kami.
                        </p>
                    </div>

                    <div className="lg:col-span-8 space-y-4">
                        {studioData.faq.map((item, idx) => (
                            <div key={idx} className="group p-6 rounded-2xl bg-neutral-900 border border-neutral-800 transition-all hover:border-neutral-700">
                                <div className="flex justify-between items-start gap-4">
                                    <h3 className="font-medium text-white text-lg">{item.question}</h3>
                                    {/* Static FAQ for now, could be interactive accordion */}
                                </div>
                                <p className="mt-4 text-neutral-400 leading-relaxed">
                                    {item.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
