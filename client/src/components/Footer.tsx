export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Susmita Padala</h3>
            <p className="text-slate-300">Building inclusive products with data-driven insights</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-white hover:text-primary-300 transition-colors" aria-label="LinkedIn">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
              <a href="#" className="text-white hover:text-primary-300 transition-colors" aria-label="GitHub">
                <i className="fab fa-github fa-lg"></i>
              </a>
            </div>
            <p className="text-slate-400 text-sm">&copy; {currentYear} Susmita Padala. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
