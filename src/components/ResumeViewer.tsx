import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Eye, X } from "lucide-react";

const ResumeViewer = () => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume/Bhaskar_T_Resume.pdf';
    link.download = 'Bhaskar_T_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    setIsViewerOpen(true);
  };

  return (
    <>
      {/* Resume Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button 
          onClick={handleView}
          className="btn-hero flex items-center gap-3 text-lg"
        >
          <Eye size={20} />
          View Resume
        </Button>
        <Button 
          onClick={handleDownload}
          variant="outline"
          className="btn-secondary flex items-center gap-3 text-lg"
        >
          <Download size={20} />
          Download PDF
        </Button>
      </div>

      {/* PDF Viewer Modal */}
      {isViewerOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-background rounded-2xl shadow-2xl w-full max-w-4xl h-[90vh] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h3 className="text-xl font-semibold">Bhaskar T - Resume</h3>
              <div className="flex items-center gap-4">
                <Button
                  onClick={handleDownload}
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Download size={16} />
                  Download
                </Button>
                <Button
                  onClick={() => setIsViewerOpen(false)}
                  variant="ghost"
                  size="sm"
                  className="w-8 h-8 p-0"
                >
                  <X size={16} />
                </Button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 p-6">
              <iframe
                src="/resume/Bhaskar_T_Resume.pdf#toolbar=1&navpanes=1&scrollbar=1"
                className="w-full h-full rounded-xl border border-border"
                title="Resume PDF Viewer"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ResumeViewer;