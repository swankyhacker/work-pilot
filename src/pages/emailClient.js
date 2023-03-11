import CompanyDrawers from "../components/emailClient/companyDrawer";
import RolesDrawer from "../components/emailClient/rolesDrawer";
import EmailDrawer from "../components/emailClient/emailDrawer";
import EmailPanel from "../components/emailClient/emailPanel";

export default function EmailClient() {
  return (
    <div className="w-screen h-screen flex">
      <div className="w-20 h-full">
        <CompanyDrawers />
      </div>
      <div className="w-2/12 h-full">
        <RolesDrawer />
      </div>
      <div className="w-4/12 h-full">
        <EmailDrawer />
      </div>
      <div className="w-6/12 h-full">
        <EmailPanel />
      </div>
    </div>
  );
}
