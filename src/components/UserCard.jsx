import '../css/UserCard.css';
import PP from '../assets/yb.png';

const user = {
  name: 'Yannis Legénie',
  role: 'Singer',
  imageUrl: '../assets/yb.png',
};
const stats = [
  { label: 'views', value: 12 },
  { label: 'uploads', value: 4 },
  { label: 'likes', value: 2 },
];

export default function Example() {
  return (
    <div
      id="cardContainer"
      className="rounded-3xl bg-third overflow-hidden shadow"
    >
      <h2 className="sr-only" id="profile-overview-title">
        Profile Overview
      </h2>
      <div className="bg-third p-6">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="sm:flex sm:space-x-5">
            <div className="flex-shrink-0">
              <img
                className="mx-auto h-20 w-20 rounded-full object-cover"
                src={PP}
                alt="User Avatar"
              />
            </div>
            <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
              <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                {user.name}
              </p>
              <p className="text-sm font-medium text-primary">{user.role}</p>
            </div>
          </div>
          <div className="mt-5 flex justify-center sm:mt-0">
            <a
              href="/UploadForm"
              className="flex justify-center items-center px-4 py-2 shadow-sm text-sm font-medium rounded-3xl text-third bg-secondary hover:bg-four"
            >
              UPLOAD
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-third bg-third grid grid-cols-1 divide-y divide-secondary sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="px-6 py-5 text-sm font-medium text-center"
          >
            <span className="text-secondary">{stat.value}</span>{' '}
            <span className="text-secondary">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
