import "./Footer.css"

export const Footer = () => {
    return (
        <footer className="bg-white text-first py-8">
        <div className="container mx-auto flex flex-wrap justify-between px-4">
            
            <div className="w-full md:w-1/2 lg:w-1/4 mb-4">
            <h2 className="text-lg font-semibold mb-4">About Us</h2>
            <p>We are a site commited to helping runners log their runs while also connecting with others. Runing should be fun, we hope this site helps with that!</p>
            </div>

            
            <div className="w-full md:w-1/2 lg:w-1/4 mb-4 text-right">
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <p>Email: contact@example.com</p>
            <p>Phone: +1 123-456-7890</p>
            </div>
        </div>
        </footer>

    )
}