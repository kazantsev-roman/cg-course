#pragma once
#include "GeometryObjectWithInitialTransformImpl.h"
#include "TriangleMesh.h"

class CTetrahedron : public CGeometryObjectWithInitialTransformImpl
{
public:
	CTetrahedron(CMatrix4d const& transform = CMatrix4d());

	virtual bool Hit(CRay const& ray, CIntersection& intersection)const;
private:
	CTriangleMesh m_triangleMesh;
};
