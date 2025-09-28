import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin, Clock, Briefcase } from "lucide-react";
import jobsData from "@/data/jobs.json";

interface Job {
  id: number;
  title: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
  posted: string;
}

const Jobs = () => {
  const [jobs] = useState<Job[]>(jobsData);
  const [selectedType, setSelectedType] = useState<string>("Semua");

  const jobTypes = ["Semua", ...new Set(jobs.map((job) => job.type))];

  const filteredJobs =
    selectedType === "Semua"
      ? jobs
      : jobs.filter((job) => job.type === selectedType);

  const handleApplyContact = (job: Job) => {
    const message = `Hai! Saya berminat untuk memohon jawatan ${job.title}. Bolehkah anda memberikan maklumat lanjut tentang proses permohonan?`;
    const whatsappUrl = `https://wa.me/+60103802579?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Sertai Pasukan Kami
          </h1>
          <p className="text-lg text-gray-600">
            Peluang kerjaya yang menarik di Bob Barbershop
          </p>
        </div>

        {/* Job Type Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {jobTypes.map((type) => (
            <Button
              key={type}
              variant={selectedType === type ? "default" : "outline"}
              onClick={() => setSelectedType(type)}
              className="mb-2"
            >
              {type}
            </Button>
          ))}
        </div>

        {/* Jobs List */}
        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <Card
              key={job.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                    <CardDescription className="text-base mb-3">
                      {job.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-1" />
                        {job.experience}
                      </div>
                    </div>
                  </div>
                  <span className="text-sm bg-black text-white px-3 py-1 rounded-full">
                    {job.type}
                  </span>
                </div>
              </CardHeader>

              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Keperluan:
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-black mr-2">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Faedah:
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {job.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    Dipos pada {formatDate(job.posted)}
                  </p>
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  className="w-full"
                  onClick={() => handleApplyContact(job)}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Mohon via WhatsApp
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">
              Tiada peluang kerja dijumpai untuk jenis ini.
            </p>
          </div>
        )}

        {/* Contact Info */}
        <div className="mt-12 bg-white rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Tidak Nampak Peranan yang Sesuai?
          </h2>
          <p className="text-gray-600 mb-4">
            Kami sentiasa mencari individu berbakat untuk menyertai pasukan
            kami. Jangan segan untuk menghubungi walaupun anda tidak nampak
            jawatan khusus yang sesuai dengan kemahiran anda.
          </p>
          <Button
            size="lg"
            onClick={() => {
              const message =
                "Hai! Saya berminat dengan peluang kerjaya di Bob Barbershop. Bolehkah anda memberitahu saya tentang sebarang jawatan kosong yang akan datang?";
              const whatsappUrl = `https://wa.me/+60103802579?text=${encodeURIComponent(
                message
              )}`;
              window.open(whatsappUrl, "_blank");
            }}
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Hubungi Kami untuk Peluang Masa Hadapan
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
