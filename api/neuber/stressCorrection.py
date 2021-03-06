from scipy.optimize import brenth as brent
import random as rnd
from scipy.integrate import quad as sci_int
import numpy as np

class RambergOsgood:
    def __init__(self,youngs_modulus,yield_strength,osgood_exp,linear_stress):
        self.youngs_modulus=youngs_modulus
        self.yield_strength=yield_strength
        self.osgood_exp=osgood_exp
        self.linear_stress=linear_stress
    

    def ramberg_osgood_stress(self,opt_stress):
        '''
        @param:opt_stress:float
            Stress value
        @return:float
            Returns total strain using Ramberg-Osgood relation
        '''
        return (opt_stress/self.youngs_modulus+0.002*(opt_stress/self.yield_strength)**self.osgood_exp)

    def ramberg_osgood_strain(self,opt_strain):
        '''
        @param:opt_strain:float
            Strain value
        @return:float
            Returns stress value with respect to provided strain
        '''
        condition=(self.yield_strength/self.youngs_modulus)
        if condition>=opt_strain:
            return (opt_strain)*self.youngs_modulus
        return self.yield_strength*(((opt_strain+0.002)*self.youngs_modulus)/self.yield_strength)**(1/self.osgood_exp)

    def elastic_strain(self, opt_stress):
        '''
        @param:opt_stress:float
            Stress value
        @return:float
            Elastic strain of the stress component
        '''
        return opt_stress/ self.youngs_modulus

    def plastic_strain(self,opt_stress):
        '''
        @param:opt_stress
        @return:float
            Returns plastic strain
        '''
        return self.ramberg_osgood_stress(opt_stress) - self.elastic_strain(opt_stress)

class Neuber(RambergOsgood):
    def __init__(self, youngs_modulus, yield_strength, osgood_exp, linear_stress):
        super().__init__(youngs_modulus, yield_strength, osgood_exp, linear_stress)
    
    def neuber_hyperbol_equation(self,opt_stress):
        return (self.linear_stress**2)/(self.youngs_modulus*opt_stress)-self.ramberg_osgood_stress(opt_stress)

    def neuber_stress(self):
        return brent(self.neuber_hyperbol_equation,0.05*self.yield_strength,self.linear_stress)

    def neuber_params(self):
        '''
        @return:dict
            Return dictionary of stress value, elastic strain components
        '''
        stress = self.neuber_stress()
        total_strain = self.ramberg_osgood_stress(stress)
        elastic_strain = self.elastic_strain(stress)
        plastic_strain = self.plastic_strain(stress)
        return {
            "Stress":round(stress,2),
            "TotalStrain":round(total_strain,9),
            "ElasticStrain":round(elastic_strain,9),
            "PlasticStrain":round(plastic_strain,9)
        }

class Glinka(RambergOsgood):
    def __init__(self, youngs_modulus, yield_strength, osgood_exp, linear_stress):
        super().__init__(youngs_modulus, yield_strength, osgood_exp, linear_stress)
        self.total_strain = self.glinka_strain()

    def glinka_strain(self):
        '''
        @return:float
            Return total strains using glinka method
        '''
        def glinka_integrate(opt_strain):
            return sci_int(self.ramberg_osgood_strain,0,opt_strain)[0]-0.5*self.linear_stress**2/self.youngs_modulus
        return brent(glinka_integrate,0,(1.5*0.5*self.linear_stress**2/self.youngs_modulus))
    
    def glinka_stress(self,res_strain):
        '''
        @params:res_strain:float
            Glinka total strain value?
        @return:float
            Glinka stress level
        '''
        def f(opt_stress):
            return self.ramberg_osgood_stress(opt_stress)-res_strain
        return brent(f,0.5*self.yield_strength,1.5*self.yield_strength)

    def glinka_params(self):
        '''
        @return:dict
            Return dictionary of stress value, elastic strain components
        '''
        stress = self.glinka_stress(self.total_strain)
        elastic_strain = self.elastic_strain(stress)
        plastic_strain = self.plastic_strain(stress)
        return {
            "Stress":round(stress,2),
            "TotalStrain":round(self.total_strain,9),
            "ElasticStrain":round(elastic_strain,9),
            "PlasticStrain":round(plastic_strain,9)
        }

class Massing(RambergOsgood):
    def __init__(self, youngs_modulus, yield_strength, osgood_exp, linear_stress):
        super().__init__(youngs_modulus, yield_strength, osgood_exp, linear_stress)

    def residual_stress(self):
        def massing(opt_stress):
            return (self.linear_stress**2)/(self.youngs_modulus*opt_stress)\
        -(opt_stress/self.youngs_modulus+2*(opt_stress/(2*self.yield_strength))**self.osgood_exp)
        return brent(massing,0.05*self.yield_strength,self.linear_stress)

    def get_residual_stress(self, stress_value):
        '''
        Calculates residual compressive stresses
        @param:stress_value:float
            Reference stress value calculated using Glinka od Neuber method
        @return:float:
            Returns calculated residual stress
        '''
        return self.residual_stress() - stress_value