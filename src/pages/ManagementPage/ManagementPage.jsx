import ImageText from "../../components/ImageText/ImageText";
import styles from "./ManagementPage.module.css";

// CSS STYLES
const { managementPageContainer, managementDiv } = styles;

const ManagementPage = () => {
  // COMMITTEE DATA
  const managementMembersData = [
    {
      memberName: "Member Names",
      memberPosition: "Postion",
      memberImageURL: "/img/blogs/placeholder.png",
      memberLinkedInURL:
        "https://www.linkedin.com/in/ayush-singh-kushwah-0a42aa221/",
      memberCategory: "Faculty",
      order: 1,
    },
    {
      memberName: "Member Name",
      memberPosition: "Postion",
      memberImageURL: "/img/blogs/placeholder.png",
      memberLinkedInURL: "/team/editorial",
      memberCategory: "Faculty",
      order: 2,
    },
    {
      memberName: "Member Name",
      memberPosition: "Postion",
      memberImageURL: "/img/blogs/placeholder.png",
      memberLinkedInURL: "/team/events",
      memberCategory: "President",
      order: 1,
    },
    {
      memberName: "Member Name",
      memberPosition: "Postion",
      memberImageURL: "/img/blogs/placeholder.png",
      memberLinkedInURL: "/team/logistics",
      memberCategory: "President",
      order: 2,
    },
    {
      memberName: "Member Name",
      memberPosition: "Postion",
      memberImageURL: "/img/blogs/placeholder.png",
      memberLinkedInURL: "/team/photography",
      memberCategory: "Management",
      order: 1,
    },
    {
      memberName: "Member Name",
      memberPosition: "Postion",
      memberImageURL: "/img/blogs/placeholder.png",
      memberLinkedInURL: "/team/pr",
      memberCategory: "Management",
      order: 2,
    },
    {
      memberName: "Member Name",
      memberPosition: "Postion",
      memberImageURL: "/img/blogs/placeholder.png",
      memberLinkedInURL: "/team/registrations",
      memberCategory: "Management",
      order: 3,
    },
    {
      memberName: "Member Name",
      memberPosition: "Postion",
      memberImageURL: "/img/blogs/placeholder.png",
      memberLinkedInURL: "/team/socialmedia",
      memberCategory: "Management",
      order: 4,
    },
    {
      memberName: "Member Name",
      memberPosition: "Postion",
      memberImageURL: "/img/blogs/placeholder.png",
      memberLinkedInURL: "/team/technical",
      memberCategory: "Management",
      order: 5,
    },
    {
      memberName: "Member Name",
      memberPosition: "Postion",
      memberImageURL: "/img/blogs/placeholder.png",
      memberLinkedInURL: "/team/photography",
      memberCategory: "Management",
      order: 6,
    },
    {
      memberName: "Member Name",
      memberPosition: "Postion",
      memberImageURL: "/img/blogs/placeholder.png",
      memberLinkedInURL: "/team/pr",
      memberCategory: "Management",
      order: 7,
    },
    {
      memberName: "Member Name",
      memberPosition: "Postion",
      memberImageURL: "/img/blogs/placeholder.png",
      memberLinkedInURL: "/team/registrations",
      memberCategory: "Management",
      order: 8,
    },
    {
      memberName: "Member Name",
      memberPosition: "Postion",
      memberImageURL: "/img/blogs/placeholder.png",
      memberLinkedInURL: "/team/socialmedia",
      memberCategory: "Management",
      order: 9,
    },
    {
      memberName: "Member Name",
      memberPosition: "Postion",
      memberImageURL: "/img/blogs/placeholder.png",
      memberLinkedInURL: "/team/technical",
      memberCategory: "Management",
      order: 10,
    },
    {
      memberName: "Member Name",
      memberPosition: "Postion",
      memberImageURL: "/img/blogs/placeholder.png",
      memberLinkedInURL: "/team/photography",
      memberCategory: "Management",
      order: 11,
    },
    {
      memberName: "Member Name",
      memberPosition: "Postion",
      memberImageURL: "/img/blogs/placeholder.png",
      memberLinkedInURL: "/team/pr",
      memberCategory: "Management",
      order: 12,
    },
    {
      memberName: "Member Name",
      memberPosition: "Postion",
      memberImageURL: "/img/blogs/placeholder.png",
      memberLinkedInURL: "/team/registrations",
      memberCategory: "Management",
      order: 13,
    },
    {
      memberName: "Member Name",
      memberPosition: "Postion",
      memberImageURL: "/img/blogs/placeholder.png",
      memberLinkedInURL: "/team/photography",
      memberCategory: "Head",
      order: 1,
    },
    {
      memberName: "Member Name",
      memberPosition: "Postion",
      memberImageURL: "/img/blogs/placeholder.png",
      memberLinkedInURL: "/team/pr",
      memberCategory: "Head",
      order: 2,
    },
    {
      memberName: "Member Name",
      memberPosition: "Postion",
      memberImageURL: "/img/blogs/placeholder.png",
      memberLinkedInURL: "/team/registrations",
      memberCategory: "Head",
      order: 3,
    },
    {
      memberName: "Member Name",
      memberPosition: "Postion",
      memberImageURL: "/img/blogs/placeholder.png",
      memberLinkedInURL: "/team/socialmedia",
      memberCategory: "Head",
      order: 4,
    },
    {
      memberName: "Member Name",
      memberPosition: "Postion",
      memberImageURL: "/img/blogs/placeholder.png",
      memberLinkedInURL: "/team/technical",
      memberCategory: "Head",
      order: 5,
    },
    {
      memberName: "Member Name",
      memberPosition: "Postion",
      memberImageURL: "/img/blogs/placeholder.png",
      memberLinkedInURL: "/team/photography",
      memberCategory: "Head",
      order: 6,
    },
    {
      memberName: "Member Name",
      memberPosition: "Postion",
      memberImageURL: "/img/blogs/placeholder.png",
      memberLinkedInURL: "/team/pr",
      memberCategory: "Head",
      order: 7,
    },
    {
      memberName: "Member Name",
      memberPosition: "Postion",
      memberImageURL: "/img/blogs/placeholder.png",
      memberLinkedInURL: "/team/registrations",
      memberCategory: "Head",
      order: 8,
    },
    {
      memberName: "Member Name",
      memberPosition: "Postion",
      memberImageURL: "/img/blogs/placeholder.png",
      memberLinkedInURL: "/team/socialmedia",
      memberCategory: "Head",
      order: 9,
    },
    {
      memberName: "Member Name",
      memberPosition: "Postion",
      memberImageURL: "/img/blogs/placeholder.png",
      memberLinkedInURL: "/team/technical",
      memberCategory: "Head",
      order: 10,
    },
    {
      memberName: "Member Name",
      memberPosition: "Postion",
      memberImageURL: "/img/blogs/placeholder.png",
      memberLinkedInURL: "/team/photography",
      memberCategory: "Head",
      order: 11,
    },
    {
      memberName: "Member Name",
      memberPosition: "Postion",
      memberImageURL: "/img/blogs/placeholder.png",
      memberLinkedInURL: "/team/pr",
      memberCategory: "Head",
      order: 12,
    },
    {
      memberName: "Member Name",
      memberPosition: "Postion",
      memberImageURL: "/img/blogs/placeholder.png",
      memberLinkedInURL: "/team/registrations",
      memberCategory: "Head",
      order: 13,
    },
    {
      memberName: "Member Name",
      memberPosition: "Postion",
      memberImageURL: "/img/blogs/placeholder.png",
      memberLinkedInURL: "/team/photography",
      memberCategory: "Associate",
      order: 1,
    },
    {
      memberName: "Member Name",
      memberPosition: "Postion",
      memberImageURL: "/img/blogs/placeholder.png",
      memberLinkedInURL: "/team/pr",
      memberCategory: "Associate",
      order: 2,
    },
    {
      memberName: "Member Name",
      memberPosition: "Postion",
      memberImageURL: "/img/blogs/placeholder.png",
      memberLinkedInURL: "/team/registrations",
      memberCategory: "Associate",
      order: 3,
    },
    {
      memberName: "Member Name",
      memberPosition: "Postion",
      memberImageURL: "/img/blogs/placeholder.png",
      memberLinkedInURL: "/team/socialmedia",
      memberCategory: "Associate",
      order: 4,
    },
    {
      memberName: "Member Name",
      memberPosition: "Postion",
      memberImageURL: "/img/blogs/placeholder.png",
      memberLinkedInURL: "/team/technical",
      memberCategory: "Associate",
      order: 5,
    },
    {
      memberName: "Member Name",
      memberPosition: "Postion",
      memberImageURL: "/img/blogs/placeholder.png",
      memberLinkedInURL: "/team/photography",
      memberCategory: "Associate",
      order: 6,
    },
    {
      memberName: "Member Name",
      memberPosition: "Postion",
      memberImageURL: "/img/blogs/placeholder.png",
      memberLinkedInURL: "/team/pr",
      memberCategory: "Associate",
      order: 7,
    },
    {
      memberName: "Member Name",
      memberPosition: "Postion",
      memberImageURL: "/img/blogs/placeholder.png",
      memberLinkedInURL: "/team/registrations",
      memberCategory: "Associate",
      order: 8,
    },
    {
      memberName: "Member Name",
      memberPosition: "Postion",
      memberImageURL: "/img/blogs/placeholder.png",
      memberLinkedInURL: "/team/socialmedia",
      memberCategory: "Associate",
      order: 9,
    },
  ];

  const faculties = managementMembersData
    .filter((member) => member.memberCategory === "Faculty")
    .sort((a, b) => a.order - b.order);

  const presidents = managementMembersData
    .filter((member) => member.memberCategory === "President")
    .sort((a, b) => a.order - b.order);

  const management = managementMembersData
    .filter((member) => member.memberCategory === "Management")
    .sort((a, b) => a.order - b.order);

  const heads = managementMembersData
    .filter((member) => member.memberCategory === "Head")
    .sort((a, b) => a.order - b.order);

  const associates = managementMembersData
    .filter((member) => member.memberCategory === "Associate")
    .sort((a, b) => a.order - b.order);

  return (
    <div className={managementPageContainer}>
      <h2>Faculty</h2>
      <div className={managementDiv}>
        {faculties.map((member) => (
          <ImageText
            key={member.memberName}
            title={member.memberName}
            titleAlign="center"
            subTitle={member.memberPosition}
            subTitleAlign="center"
            link={member.memberLinkedInURL}
            mainImg={member.memberImageURL}
            textColor={"var(--textDark)"}
            externalLink={true}
          />
        ))}
      </div>

      <h2>Presidents</h2>
      <div className={managementDiv}>
        {presidents.map((member) => (
          <ImageText
            key={member.memberName}
            title={member.memberName}
            titleAlign="center"
            subTitle={member.memberPosition}
            subTitleAlign="center"
            link={member.memberLinkedInURL}
            mainImg={member.memberImageURL}
            textColor={"var(--textDark)"}
            externalLink={true}
          />
        ))}
      </div>

      <h2>Management</h2>
      <div className={managementDiv}>
        {management.map((member) => (
          <ImageText
            key={member.memberName}
            title={member.memberName}
            titleAlign="center"
            subTitle={member.memberPosition}
            subTitleAlign="center"
            link={member.memberLinkedInURL}
            mainImg={member.memberImageURL}
            textColor={"var(--textDark)"}
            externalLink={true}
          />
        ))}
      </div>

      <h2>Heads</h2>
      <div className={managementDiv}>
        {heads.map((member) => (
          <ImageText
            key={member.memberName}
            title={member.memberName}
            titleAlign="center"
            subTitle={member.memberPosition}
            subTitleAlign="center"
            link={member.memberLinkedInURL}
            mainImg={member.memberImageURL}
            textColor={"var(--textDark)"}
            externalLink={true}
          />
        ))}
      </div>

      <h2>Associates</h2>
      <div className={managementDiv}>
        {associates.map((member) => (
          <ImageText
            key={member.memberName}
            title={member.memberName}
            titleAlign="center"
            subTitle={member.memberPosition}
            subTitleAlign="center"
            link={member.memberLinkedInURL}
            mainImg={member.memberImageURL}
            textColor={"var(--textDark)"}
            externalLink={true}
          />
        ))}
      </div>
    </div>
  );
};

export default ManagementPage;
