import { User, UserCircle, Globe, Shield, ChevronDown, X, Plus } from 'lucide-react'
import { useState } from "react"

const Social = () => {
  const [socialLinks, setSocialLinks] = useState([
    { id: 1, platform: "Facebook", url: "" },
    { id: 2, platform: "Twitter", url: "" },
    { id: 3, platform: "Instagram", url: "" },
    { id: 4, platform: "Youtube", url: "" }
  ])

  const handleAddLink = () => {
    const newId = socialLinks.length + 1
    setSocialLinks([...socialLinks, { id: newId, platform: "Site", url: "" }])
  }

  const handleDeleteLink = (id) => {
    setSocialLinks(socialLinks.filter(link => link.id !== id))
  }

  const handleUrlChange = (id, value) => {
    setSocialLinks(socialLinks.map(link => 
      link.id === id ? { ...link, url: value } : link
    ))
  }

  const getPlatformIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case 'facebook':
        return <div className="text-blue-600">f</div>
      case 'twitter':
        return <div className="text-blue-400">t</div>
      case 'instagram':
        return <div className="text-pink-500">i</div>
      case 'youtube':
        return <div className="text-red-600">y</div>
      default:
        return <Globe size={16} />
    }
  }

  return (
    <div className="max-w-3xl">  
      <div className="flex flex-col gap-4">
        {socialLinks.map((link) => (
          <div key={link.id} className="flex flex-col gap-2">
            <div className="text-sm font-medium">Social Link {link.id}</div>
            <div className="flex gap-2">
              <div className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded bg-white min-w-[150px]">
                {getPlatformIcon(link.platform)}
                <span>{link.platform}</span>
                <ChevronDown size={16} className="ml-auto text-gray-500" />
              </div>
              <div className="flex flex-1 border border-gray-200 rounded bg-white">
                <input
                  type="text"
                  placeholder="Profile link/url..."
                  className="flex-1 px-4 py-2 outline-none"
                  value={link.url}
                  onChange={(e) => handleUrlChange(link.id, e.target.value)}
                />
                <button 
                  className="px-2 text-gray-400 hover:text-gray-600"
                  onClick={() => handleDeleteLink(link.id)}
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
        
        <button 
          className="flex items-center justify-center gap-2 p-3 bg-gray-50 border border-dashed border-gray-300 rounded text-gray-500 hover:bg-gray-100 mt-2"
          onClick={handleAddLink}
        >
          <Plus size={18} />
          <span>Add New Social Link</span>
        </button>
        
        <button className="px-6 py-3 bg-blue-600 text-white rounded font-medium mt-4 self-start hover:bg-blue-700">
          Save Changes
        </button>
      </div>
    </div>
  )
}

export default Social
