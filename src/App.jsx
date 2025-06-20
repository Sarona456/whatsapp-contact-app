
import React from "react";

const WhatsAppContactCard = () => {
  const contacts = [
    { name: "ZAINAB", phone: "201068683009" },
    { name: "HANA", phone: "201000102804" },
    { name: "NEAMA", phone: "201009796139" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-200 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md text-center space-y-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-14 mx-auto"
        />
        <h2 className="text-xl font-bold text-gray-800">مرحباً بك في خدمتنا</h2>
        <p className="text-sm text-gray-600">اختر الرقم المناسب للتواصل معنا</p>
        <div className="space-y-3 text-right">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-50 p-2 rounded-lg border border-gray-200"
            >
              
              <div>
                <p className="font-medium">{contact.name}</p>
                <p className="text-sm text-gray-500">+{contact.phone}</p>
              </div>
              <a
                href={`https://wa.me/${contact.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 text-sm"
              >
                تواصل
              </a>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-4">نحن متواجدون دائماً لخدمتك</p>
      </div>
    </div>
  );
};

export default WhatsAppContactCard;
