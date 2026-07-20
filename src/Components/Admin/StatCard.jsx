const StatCard = ({ title, value, icon, color }) => {
    return (
        <div
            className={`${color} text-white rounded-2xl shadow-lg p-6 hover:scale-105 transition duration-300`}
        >
            <div className="flex justify-between items-center">

                <div>

                    <h3 className="text-lg font-medium">
                        {title}
                    </h3>

                    <h2 className="text-4xl font-bold mt-3">
                        {value}
                    </h2>

                </div>

                <div className="text-5xl opacity-80">
                    {icon}
                </div>

            </div>
        </div>
    );
};

export default StatCard;